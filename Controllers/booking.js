import Booking from "../modules/booking.js";



export const booked = async (req, res) => {
  const { name, price, phone, jina1, jina2, seat } = req.body;
  try {
    const tripbook = await new Booking({
      name,
      price,
      phone,
      jina1,
      jina2,
      seat,
    }).save();
    console.log(tripbook);
    return res.json(tripbook);
  } catch (error) {
    console.log(error);
  }
};


export const allbooking = async (req, res) => {
  try{
    const alltrip = await Booking.find({});
    console.log(alltrip);
    return res.json(alltrip);
  }catch(error){
    console.log(error);
  }
}

export const singlebooking = async (req, res) => {
  try{
    const alltrip = await Booking.find({});
    console.log(alltrip);
    return res.json(alltrip);
  }catch(error){
    console.log(error);
  }
}

