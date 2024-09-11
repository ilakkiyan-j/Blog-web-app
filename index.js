import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var data = {
  Author : ["Jessica Martin","Ryan Thompson","Emily Davis"],
  Title : [" 5 Daily Habits to Boost Your Productivity and Focus ",
    " A Weekend Getaway to the Charming Town of Asheville", 
    "Easy Weeknight Dinners: 3 Quick Recipes for Busy Families"],
  Description : ["Explore five simple but effective habits you can incorporate into your daily routine to enhance your productivity and maintain focus throughout the day. Tips include morning routines, time-blocking techniques, and mindfulness practices.",
    "Discover what makes Asheville a perfect destination for a quick weekend trip. From its vibrant arts scene and historic architecture to its culinary delights and scenic hiking trails, this guide covers everything you need to know for an unforgettable visit.",
    "Get inspired with three delicious and quick recipes that are perfect for busy weeknights. These meals are designed to be prepared in under 30 minutes, including a hearty pasta dish, a flavorful stir-fry, and a one-pan chicken dinner."
  ]

}

app.get("/",(req,res)=>{
  res.render("index.ejs",data)
});

app.post("/submit",(req,res)=>{
  const newAuthor = req.body.Author;
  const newTitle = req.body.Title;
  const newDescription = req.body.Description;
  data['Author'].push(newAuthor);
data['Title'].push(newTitle);
data['Description'].push(newDescription);
  res.render("index.ejs",data)
});

app.get("/create",(req,res)=>{
  res.render("create.ejs")
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
