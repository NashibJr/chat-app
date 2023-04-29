import { nanoid } from "@reduxjs/toolkit";
import chats from "../images/chat.png";
import logout from "../images/logout.png";
import newchat from "../images/newchat.jpg";

export const users = [
  {
    id: nanoid(),
    username: "Maracus Rashford",
    email: "marcusrashford@email.com",
    password: "marcus@10",
    friends: [],
  },
  {
    id: nanoid(),
    username: "Paul Pogba",
    email: "paulpogbad@email.com",
    password: "pogba@00006",
    friends: [],
  },
  {
    id: nanoid(),
    username: "Bruno Fernandes",
    email: "brunofernandes@email.com",
    password: "bfernandes@_8",
    friends: [],
  },
  {
    id: nanoid(),
    username: "David De Dea",
    email: "daviddegea@email.com",
    password: "daviddave@0001",
    friends: [],
  },
  {
    id: nanoid(),
    username: "Jadon Sancho",
    email: "jadonmaliksancho@email.com",
    password: "@sanchooo10",
    friends: [],
  },
];

export const listValues = [
  { route: "/chats", image: chats, label: "Chats" },
  { route: "/newchats", image: newchat, label: "New Chats" },
  { route: "/", image: logout, label: "Logout" },
];
