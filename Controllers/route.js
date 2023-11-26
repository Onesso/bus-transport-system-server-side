import Route from "../modules/route.js"; //db

import slugify from "slugify";

export const create = async (req, res) => {
  try {
    const { routeName } = req.body;

    if (!routeName) {
      return res.status(400).json({ error: "Route is required" });
    }

    const existingRoute = await Route.findOne({ name: routeName });

    if (existingRoute) {
      return res.status(400).json({ error: "Route already exists" });
    }

    const route = await new Route({
      name: routeName,
      slug: slugify(routeName),
    }).save();

    console.log("This is the uploaded route", route);
    return res.status(201).json(route);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const list = async (req, res) => {
  try {
    const listAllRoutes = await Route.find({});
    console.log("the Get end point is working", listAllRoutes);
    return res.json(listAllRoutes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const single = async (req, res) => {
  const { routeID } = req.params;
  try{
    const singleroute = await Route.findById(routeID);
    return res.json(singleroute);
  }catch(error){
    console.log(error);
  }
}

export const update = async (req, res) => {
  const { travelId } = req.params;
  const { name } = req.body;

  try {
    const updatingRoute = await Route.findByIdAndUpdate(
      travelId,
      {
        name,
        slug: slugify(name),
      },
      { new: true }
    );

    if (!updatingRoute) {
      return res.status(404).json({ error: "Route not found" });
    }

    console.log(updatingRoute);
    res.json(updatingRoute);

    console.log("this is from the update controller");
  } catch (error) {
    console.log(error);
  }
};


//remove function
export const remove = async (req, res) => {
  const { travelId } = req.params;
  try {
    const removed = await Route.findByIdAndDelete(travelId);
    return res.json(removed);
  } catch (error) {
    console.log(error);
  }
};
