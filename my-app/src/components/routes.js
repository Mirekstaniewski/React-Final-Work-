import { Component } from "react";
import Chat from "./chat";
import {LOGIN_ROUTE} from "./utils/consts";


export const publicRoutes = [
    {
        path:LOGIN_ROUTE
        Component: Login 
    }
]

export const privateRoutes = [
    {
        path:CHAT_ROUTE
        Component: Chat
    }
]