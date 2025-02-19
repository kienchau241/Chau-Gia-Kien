import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { log } from "console";

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

// app.get("/users", async (req: Request, res: Response) => {
//     const users = await prisma.user.findMany();
//     res.json(users);
// });

// 1. Create a new user
app.post("/users", async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        const user = await prisma.user.create({
            data: { name, email },
        });
        res.status(200)
        .json({
            message:"Create user successfully",
            data:user
        });
    } catch (error) {
        res.status(400).json({ error: "Error creating product" });
    }
});

// 2. List user with Basic Filters
app.get("/users", async (req: Request, res: Response) => {
    try {
      const { id, name, email } = req.query;
      const filters: any = {};
  
      if (id) filters.id = id;
      if (name) filters.name = name;
      if (email) filters.email = email;
  
      const user = await prisma.user.findMany({ where: filters });
      
      res.status(200).json({
        message: "Get users successfully",
        total: user.length,
        data:user
    });
    } catch (error) {
      res.status(400).json({ error: "Error fetching users" });
    }
});


//3. Get details of a user
app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) },
        });
        res.status(200).json({
            message:`Get user with id ${id} successfully`,
            data:user
        });
    } catch (error) {
        res.status(400).json({ error: "Error fetching user" });
    }
});

//4. Get details of a user
app.put("/users/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
    
        const updatedProduct = await prisma.user.update({
          where: { id: parseInt(id) },
          data: { name, email },
        });
    
        res.status(200)
        .json({
            message:`Update user with id ${id} successfully`,
            data:updatedProduct
        })
      } catch (error) {
        res.status(400).json({ error: "Error updating user" });
      }
});

app.delete("/products/:id", async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      await prisma.user.delete({
        where: { id: parseInt(id) },
      });
  
      res.json({ message: `Delete user with id ${id} deleted successfully`});
    } catch (error) {
      res.status(400).json({ error: "Error deleting product" });
    }
});




// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
