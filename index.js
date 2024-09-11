import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var data = {
  Author: [
    "Jessica Martin", "Ryan Thompson", "Emily Davis", "Alex Green", "Mia Collins", 
    "Jordan Lee", "Taylor Brooks", "Samantha Carter", "Chris Miller", "Jamie Lewis",
    "Morgan Bailey", "Avery Scott", "Jordan Taylor", "Harper Wilson", "Riley Parker", 
    "Cameron Evans", "Casey Adams", "Sydney Nelson", "Dakota King", "Reagan Cooper",
    "Quinn Foster", "Rowan Reed", "Skylar Hayes", "Peyton Morgan", "Alexis Bell",
    "Jesse Gray", "Addison James", "Charlie Brooks", "Elliot Taylor", "Bailey Clark",
    "Tatum Lewis", "Emerson Davis", "Jordyn Allen", "Parker Martin", "Cameron Wright",
    "Blake Thompson", "Rowan Scott", "Kendall Bailey", "Reese Jordan", "Everly Rivera",
    "Sage Mitchell", "Kai Anderson", "Mackenzie Hall", "Spencer Adams", "Aiden Brooks",
    "Rory Clark", "Phoenix Walker", "Sloane Evans", "Logan Green", "Reagan Parker"
  ],
  Title: [
    "Maximizing Your Morning: 4 Routines for a Productive Day",
    "Exploring the Hidden Gems of Charleston: A 48-Hour Guide",
    "Quick and Nutritious: 3 Healthy Breakfasts for Busy Mornings",
    "How to Create a Productive Workspace: Tips and Tricks",
    "A Guide to the Best Coffee Shops in Portland for Remote Work",
    "Five Weekend Getaways to Recharge and Refresh",
    "Easy Lunches: 3 Recipes That Are Both Quick and Satisfying",
    "Mastering Time Management: Techniques to Boost Your Efficiency",
    "Discover the Best Hiking Trails in the Pacific Northwest",
    "One-Pot Wonders: 3 Simple Dinners for Busy Families",
    "Creating a Balanced Routine: Tips for Wellness and Productivity",
    "The Ultimate Guide to a Relaxing Staycation at Home",
    "Healthy Snacking: 3 Quick Recipes to Keep You Energized",
    "Exploring the Vibrant Culture of New Orleans: A 48-Hour Itinerary",
    "How to Stay Focused During Remote Work: Tips and Tools",
    "Weekend Road Trips: Top Destinations for Short Getaways",
    "Quick and Easy Dinner Ideas for Busy Weeknights",
    "The Art of Minimalist Living: Tips for a Simpler Life",
    "Top 5 Must-Visit Destinations for Nature Lovers",
    "Healthy Meal Prep: 3 Recipes for a Week of Nutritious Lunches",
    "Maximize Your Productivity with These Morning Habits",
    "Exploring Local Farmers' Markets: Fresh Finds and Delicious Recipes",
    "Three Quick and Easy Breakfasts for Busy Mornings",
    "Traveling on a Budget: Tips for Affordable Adventures",
    "Simple Strategies for Effective Work-Life Balance",
    "Top 5 Cozy Cafés for Studying or Working Remotely",
    "Easy One-Pan Meals for Busy Weeknights",
    "How to Set and Achieve Your Personal Goals: A Step-by-Step Guide",
    "A Culinary Tour of the Best Street Food in Mexico City",
    "Quick Fixes for Common Productivity Pitfalls",
    "The Best Yoga Poses to Start Your Day Off Right",
    "Exploring the Historic Charm of Savannah: A Weekend Guide",
    "Healthy Dinners in Under 30 Minutes: 3 Simple Recipes",
    "Boost Your Creativity with These Fun and Easy Hobbies",
    "Essential Tips for Planning a Stress-Free Vacation",
    "The Ultimate Guide to Easy and Delicious Smoothie Recipes",
    "How to Optimize Your Home Office for Maximum Productivity",
    "Discover the Best Scenic Drives in the U.S. for a Weekend Road Trip",
    "Three Quick Recipes for Delicious and Nutritious Snacks",
    "The Benefits of Journaling: How to Start and Maintain a Daily Practice",
    "Exploring the Best Beaches in Florida for a Perfect Getaway",
    "Quick and Healthy Lunch Ideas for Busy Professionals",
    "How to Build a Productive Morning Routine That Works for You",
    "The Top 5 Books to Read for Personal Development and Growth",
    "Easy Recipes for a Cozy and Relaxing Dinner at Home",
    "How to Make the Most of Your Weekend: Tips for Fun and Relaxation",
    "The Ultimate Guide to Preparing for a Successful Work Week",
    "Delicious and Healthy Smoothie Bowl Recipes to Start Your Day",
    "Mastering the Art of Meal Planning: Tips and Tricks",
    "Exploring the Best Hiking Trails in the Rockies: A Comprehensive Guide",
    "Five Simple Strategies for Achieving Work-Life Balance",
    "How to Create a Productive Study Space for Remote Learning",
    "The Best Weekend Getaways for Foodies: Top Culinary Destinations",
    "Quick and Easy Dinner Recipes for Picky Eaters",
    "How to Improve Your Focus with Mindfulness Techniques",
    "Exploring the Charm of Small Towns: Top Hidden Gems to Visit",
    "Essential Tips for Packing Light for a Weekend Trip",
    "Three Delicious and Nutritious Smoothie Recipes for Busy Mornings",
    "How to Incorporate More Movement into Your Daily Routine",
    "Discover the Best Fall Foliage Destinations in the U.S.",
    "Quick and Healthy Dinner Ideas for the Whole Family",
    "The Best Apps for Boosting Your Productivity and Organization",
    "How to Create a Relaxing Bedtime Routine for Better Sleep",
    "Exploring the Art and Culture Scene in Major Cities: A Weekend Guide",
    "Three Easy and Delicious Recipes for Homemade Energy Bars",
    "The Ultimate Guide to Planning a Fun and Stress-Free Family Vacation",
    "How to Stay Motivated and Productive During Challenging Times",
    "Quick and Tasty Weeknight Meals for Busy Professionals",
    "How to Maintain a Healthy Lifestyle While Traveling"
  ],
  Description: [
    "Start your day off right with these four morning routines that will set you up for success. From energizing exercises to effective planning techniques, these tips are designed to help you make the most of your mornings.",
    "Charleston is known for its rich history and Southern charm. This guide highlights the must-see attractions and local favorites, from historic sites to unique eateries, all within a 48-hour visit.",
    "Short on time but still want a healthy breakfast? These three quick recipes are perfect for busy mornings, featuring a variety of options like smoothie bowls, overnight oats, and avocado toast with a twist.",
    "Create a productive workspace with these tips and tricks. Learn how to organize your desk, choose the right tools, and create an environment that enhances focus and efficiency.",
    "Portland's coffee shops are ideal for remote work. Discover the best spots for great coffee, comfortable seating, and a productive atmosphere.",
    "Recharge with these five weekend getaways, perfect for a quick break from the routine. Each destination offers unique experiences to help you relax and rejuvenate.",
    "Try these three satisfying lunch recipes that are both quick to prepare and delicious. Perfect for busy days when you need a nourishing meal without the fuss.",
    "Boost your efficiency with these time management techniques. Learn how to prioritize tasks, avoid distractions, and manage your schedule effectively.",
    "Explore the best hiking trails in the Pacific Northwest. This guide covers scenic routes, difficulty levels, and tips for enjoying the great outdoors.",
    "Simplify dinner time with these one-pot recipes that are both easy and flavorful. Ideal for busy weeknights when you need a quick and hearty meal.",
    "Balance your wellness and productivity with these tips. Learn how to integrate healthy habits and routines into your daily life for overall well-being.",
    "Create a relaxing staycation at home with this ultimate guide. Discover tips for creating a serene environment, fun activities, and ways to unwind without leaving your house.",
    "Stay energized with these quick and healthy snack recipes. Perfect for those busy moments when you need a nutritious pick-me-up.",
    "Experience the vibrant culture of New Orleans with this 48-hour itinerary. From historic sites to culinary delights, this guide covers must-see attractions and local favorites.",
    "Enhance your remote work experience with these tips and tools. Discover strategies to stay focused, organized, and productive while working from home.",
    "Plan a memorable weekend road trip with these top destinations. Explore scenic routes, fun activities, and unique spots for a short getaway.",
    "Simplify weeknight dinners with these quick and easy recipes. Perfect for busy families looking for delicious meals that come together in no time.",
    "Embrace a minimalist lifestyle with these tips for simplifying your life. Learn how to declutter, focus on what matters, and live with intention.",
    "Discover top destinations for nature lovers with this guide. Explore breathtaking landscapes, outdoor activities, and natural wonders that are perfect for your next adventure.",
    "Prepare nutritious lunches for the week with these meal prep recipes. Easy to make and packed with healthy ingredients, these options will keep you fueled and satisfied.",
    "Enhance your productivity with these morning habits. Learn how to create a routine that boosts your energy, focus, and motivation throughout the day.",
    "Explore local farmers' markets and discover fresh, seasonal produce. This guide includes tips for shopping, recipes, and ways to incorporate fresh ingredients into your meals.",
    "Try these three quick and easy breakfast ideas for busy mornings. From smoothie bowls to overnight oats, these recipes will help you start your day on the right foot.",
    "Travel on a budget with these tips for affordable adventures. Learn how to save money on flights, accommodations, and activities while still having a great time.",
    "Achieve work-life balance with these simple strategies. Find ways to manage your time effectively and create harmony between your personal and professional life.",
    "Find the best cozy cafés for studying or working remotely. Discover places with comfortable seating, good coffee, and a productive atmosphere.",
    "Enjoy easy one-pan meals with these quick and delicious recipes. Perfect for busy weeknights when you need a tasty dinner without the hassle of multiple dishes.",
    "Set and achieve your personal goals with this step-by-step guide. Learn how to define your objectives, create an action plan, and stay motivated.",
    "Take a culinary tour of Mexico City with this guide to the best street food. Experience a variety of delicious dishes and local favorites.",
    "Overcome common productivity pitfalls with these quick fixes. Learn strategies to address distractions, procrastination, and other challenges.",
    "Start your day with the right yoga poses to boost your energy and focus. This guide includes simple poses to help you feel refreshed and ready for the day.",
    "Explore the historic charm of Savannah with this weekend guide. Discover attractions, dining options, and local spots that make Savannah a unique destination.",
    "Prepare healthy dinners in under 30 minutes with these simple recipes. Perfect for busy families looking for nutritious and quick meal ideas.",
    "Boost your creativity with these fun and easy hobbies. Explore new activities that can help you relax, unwind, and stimulate your creative side.",
    "Plan a stress-free vacation with these essential tips. Learn how to organize your trip, manage logistics, and ensure a smooth and enjoyable experience.",
    "Create delicious and easy smoothie recipes with this ultimate guide. From classic blends to innovative combinations, find new ways to enjoy nutritious smoothies.",
    "Optimize your home office with these tips for maximum productivity. Discover how to arrange your space, choose the right equipment, and create an efficient work environment.",
    "Explore the best scenic drives in the U.S. for a memorable weekend road trip. Enjoy picturesque landscapes, charming towns, and enjoyable stops along the way.",
    "Try these three quick and tasty snack recipes. Perfect for when you're on the go or need a quick and nutritious boost during the day.",
    "Discover the benefits of journaling with this guide. Learn how to start a journaling practice and how it can help with personal growth and self-reflection.",
    "Explore the best beaches in Florida with this guide. Find out where to go for sun, sand, and sea, and enjoy a perfect coastal getaway.",
    "Get quick and healthy lunch ideas with these recipes. Perfect for busy professionals who need nutritious and easy-to-make lunch options.",
    "Build a productive morning routine with these tips. Learn how to create a routine that sets you up for success and helps you stay focused throughout the day.",
    "Read these top books for personal development and growth. Discover must-reads that offer valuable insights and strategies for improving yourself.",
    "Prepare a cozy and relaxing dinner at home with these easy recipes. Perfect for unwinding after a long day and enjoying a comforting meal.",
    "Make the most of your weekend with these tips for fun and relaxation. Find ideas for activities, relaxation techniques, and ways to enjoy your free time.",
    "Prepare for a successful work week with this ultimate guide. Learn how to plan, organize, and set yourself up for productivity and achievement.",
    "Start your day with these healthy and delicious smoothie bowl recipes. Enjoy a nutritious breakfast that’s both tasty and satisfying.",
    "Master the art of meal planning with these tips and tricks. Learn how to plan your meals, save time, and eat healthier throughout the week.",
    "Explore the best hiking trails in the Rockies with this comprehensive guide. Find the top routes, difficulty levels, and tips for a great hiking experience.",
    "Achieve work-life balance with these five simple strategies. Learn how to manage your time effectively and maintain harmony between your professional and personal life.",
    "Create a productive study space for remote learning with these tips. Discover how to set up a space that enhances focus and supports effective learning.",
    "Explore top culinary destinations for foodies with this guide to weekend getaways. Discover where to go for the best dining experiences and food-related activities.",
    "Enjoy quick and easy dinner recipes for picky eaters. Find meal ideas that are both delicious and suitable for even the most discerning palates.",
    "Improve your focus with these mindfulness techniques. Learn simple practices to help you stay present, reduce stress, and enhance concentration.",
    "Discover the charm of small towns with this guide to top hidden gems. Explore unique destinations that offer a quaint and delightful escape from city life.",
    "Pack light for your weekend trips with these essential tips. Learn how to streamline your packing and travel efficiently without sacrificing comfort.",
    "Enjoy delicious and nutritious smoothie recipes for busy mornings. Find new ways to make healthy smoothies that are both quick and satisfying.",
    "Incorporate more movement into your daily routine with these tips. Discover simple ways to stay active throughout the day, even with a busy schedule.",
    "Explore the best fall foliage destinations in the U.S. with this guide. Find the most beautiful spots to enjoy autumn colors and seasonal activities.",
    "Prepare quick and healthy dinners for the whole family with these recipes. Discover meals that are both nutritious and easy to make for busy nights.",
    "Boost your productivity with these top apps for organization and time management. Find tools that can help you stay on track and achieve your goals.",
    "Create a relaxing bedtime routine with these tips for better sleep. Discover practices that can help you unwind and improve the quality of your rest.",
    "Explore the art and culture scene in major cities with this weekend guide. Discover museums, galleries, and cultural events for an enriching experience.",
    "Make your own homemade energy bars with these easy recipes. Find delicious and nutritious options for a quick snack or on-the-go energy boost.",
    "Plan a fun and stress-free family vacation with these essential tips. Learn how to organize activities, manage logistics, and ensure everyone has a great time.",
    "Stay motivated and productive during challenging times with these strategies. Discover ways to maintain focus and positivity, even when facing difficulties.",
    "Enjoy quick and tasty weeknight meals with these recipes. Perfect for busy professionals looking for easy-to-make dinners that don’t compromise on flavor.",
    "Maintain a healthy lifestyle while traveling with these practical tips. Discover how to stay fit, eat well, and manage your wellness routine on the road."
  ],
  Theme: [
    "Productivity", "Travel", "Quick Recipes", "Productivity", "Remote Work", 
    "Travel", "Quick Recipes", "Time Management", "Travel", "Quick Recipes",
    "Wellness", "Staycation", "Quick Recipes", "Travel", "Remote Work",
    "Travel", "Quick Recipes", "Minimalism", "Nature", "Meal Prep",
    "Productivity", "Farmers' Markets", "Quick Recipes", "Budget Travel",
    "Work-Life Balance", "Remote Work", "Healthy Recipes", "Personal Development",
    "Productivity", "Yoga", "Travel", "Healthy Recipes", "Creativity",
    "Vacation Planning", "Smoothie Recipes", "Productivity", "Scenic Drives",
    "Quick Recipes", "Journaling", "Travel", "Quick Recipes", "Productivity",
    "Books", "Healthy Recipes", "Weekend Fun", "Work Week Preparation",
    "Smoothie Recipes", "Meal Planning", "Travel", "Work-Life Balance",
    "Study Space", "Culinary Destinations", "Quick Recipes", "Mindfulness",
    "Small Towns", "Packing Tips", "Smoothie Recipes", "Movement",
    "Fall Foliage", "Family Meals", "Productivity Apps", "Bedtime Routine",
    "Art and Culture", "Energy Bars", "Family Vacation", "Motivation",
    "Weeknight Meals", "Healthy Travel"
  ],
  blogPosts : [
    {
      title: "The Future of Renewable Energy",
      date: "January 1, 2024",
      author: "Emma",
      content: `
        <p>The transition to renewable energy sources is one of the most significant shifts in the global energy landscape. As we move away from fossil fuels, renewable energy sources such as wind, solar, and hydro are becoming increasingly crucial.</p>
        <p>This is some additional paragraph placeholder content. It highlights how renewable energy technologies are evolving and what this means for the future of our planet. Innovations in energy storage and grid integration are key areas of focus.</p>
        <blockquote>
          <p>"The future of energy lies in harnessing the power of the sun and wind."</p>
          <footer>This statement emphasizes the importance of renewable energy sources and the role they will play in our future.</footer>
        </blockquote>
        <ul>
          <li>Solar Power: Harnesses energy from the sun.</li>
          <li>Wind Power: Utilizes wind turbines to generate electricity.</li>
          <li>Hydro Power: Uses flowing water to create energy.</li>
        </ul>
        <ol>
          <li>Reduces greenhouse gas emissions.</li>
          <li>Decreases reliance on fossil fuels.</li>
          <li>Promotes sustainable development.</li>
        </ol>
      `
    },
    {
      title: "Exploring Space Travel",
      date: "February 15, 2024",
      author: "Alex",
      content: `
        <p>Space travel has always captured human imagination, and recent advancements in technology are bringing us closer to exploring the cosmos. From private spaceflights to interplanetary missions, the era of space exploration is rapidly expanding.</p>
        <p>This is some additional paragraph placeholder content. It discusses current space missions and the future of space tourism.</p>
        <blockquote>
          <p>"To confine our attention to terrestrial matters would be to limit the human spirit."</p>
          <footer>This quote reflects the limitless potential of space exploration and our drive to push beyond our earthly boundaries.</footer>
        </blockquote>
        <ul>
          <li>Apollo 11: The first manned moon landing.</li>
          <li>Mars Rover: Robotic missions to explore Mars.</li>
          <li>Hubble Telescope: Space observatory that has provided stunning images of the universe.</li>
        </ul>
        <ol>
          <li>Establish a human presence on Mars.</li>
          <li>Explore the outer planets and their moons.</li>
          <li>Develop technologies for long-duration space travel.</li>
        </ol>
        `
    },
    {
      title: "Advancements in Artificial Intelligence",
      date: "March 10, 2024",
      author: "Sarah",
      content: `
        <p>Artificial Intelligence (AI) continues to advance at a rapid pace, transforming industries and reshaping our daily lives. From machine learning algorithms to advanced neural networks, AI technologies are becoming more sophisticated and impactful.</p>
        <p>This is some additional paragraph placeholder content. It covers recent developments in AI and their implications for various sectors.</p>
        <blockquote>
          <p>"The goal of AI is to create systems that can perform tasks that would normally require human intelligence."</p>
          <footer>This quote highlights the essence of AI technology and its purpose.</footer>
        </blockquote>
        <ul>
          <li>Machine Learning: Algorithms that improve with experience.</li>
          <li>Natural Language Processing: Enables computers to understand and respond to human language.</li>
          <li>Computer Vision: Allows machines to interpret and make decisions based on visual data.</li>
        </ul>
        <ol>
          <li>Ethical concerns and bias in AI systems.</li>
          <li>Data privacy and security.</li>
          <li>Ensuring transparency and accountability in AI decisions.</li>
        </ol>
       `
    }
  ]
};



app.get("/",(req,res)=>{
  res.render("index.ejs",data)
});

app.post("/submit",(req,res)=>{
  const newAuthor = req.body.Author;
  const newTitle = req.body.Title;
  const newDescription = req.body.Description;
  const newTheme = req.body.Theme;
  data['Author'].unshift(newAuthor);
data['Title'].unshift(newTitle);
data['Description'].unshift(newDescription);
data['Theme'].unshift(newTheme);
  res.render("index.ejs",data)
});

app.get("/create",(req,res)=>{
  res.render("create.ejs")
});

app.get("/about",(req,res)=>{
  res.render("about.ejs")
});

app.get("/search",(req,res)=>{
  res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
