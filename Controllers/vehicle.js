import Vehicle from "../modules/vehicle.js";
import fs from "fs";
import slugify from "slugify";

export const create = async (req, res) => {
  try {
    console.log(req.fields);
    console.log(req.files);

    const { plate, price, from, to, no_buses } = req.fields;

    const { photo } = req.files;

    //validation
    if (!plate || !plate.trim()) {
      return res.json({ error: "Plate is required" });
    }
    if (!price || !price.trim()) {
      return res.json({ error: "Bus Requires price" });
    }
    if (!from) {
      return res, json({ error: "Enter Depature location" });
    }
    if (!to) {
      return res.json({ error: "Enter Destination location" });
    }
    if (!no_buses) {
      return res.json({ error: "Number of buses" });
    }
    if (photo && photo.size > 10000000) {
      return res.json({ error: "Image should be less than 1mb in size" });
    }

    //create vehicle
    const vehicle = new Vehicle({ ...req.fields, slug: slugify(plate) });

    if (photo) {
      vehicle.photo.data = fs.readFileSync(photo.path);
      vehicle.photo.contentType = photo.type;
    }

    await vehicle.save();
    res.json(vehicle);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
};

export const allVehicles = async (req, res) => {
  try {
    const fleet = await Vehicle.find({})
      .select("-photo")
      .sort({ createdAt: -1 });
    return res.json(fleet);
  } catch (error) {
    console.log(error);
  }
};

export const photo = async (req, res) => {
  const { vehicleId } = req.params;
  try {
    const pics = await Vehicle.findById(vehicleId);
    // Check if the product has a photo
    if (pics.photo.data) {
      // Set the response's Content-Type header to the photo's content type
      res.set("Content-Type", pics.photo.contentType);

      // Send the photo's data as the response body
      res.send(pics.photo.data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const searched = async (req, res) => {
  try {
    //deconstruct to get the arguments
    const { from, to } = req.body;

    let args = {};
    //validation
    if (from == to) {
      return res.json({
        error: "The Destination or Departure location can not be the same.",
      });
    }
    if (!from) {
      return res.json({ error: "Depature loaction is required." });
    }
    if (!to) {
      return res.json({ error: "Destination location is required." });
    }

    if (from) args.from = from;
    if (to) args.to = to;
    console.log("This args is what is searched for vehicle:", args);

    const gari = await Vehicle.find(args).select("-photo");
    console.log("This is what is found in the db:", gari);

    return res.json(gari);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
