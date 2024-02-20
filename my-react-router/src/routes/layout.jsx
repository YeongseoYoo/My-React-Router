import React from "react";
import { Outlet } from "react-router-dom";
import MyFooter from "~/components/MyFooter/MyFooter";
import MyNavbar from "~/components/MyNavbar/MyNavbar";

const brand = "Wadiz Replica";
export default function Layout() {
    return (
        <>
            <MyNavbar brandTitle={brand} />
            <Outlet />
            <MyFooter brandTitle={brand} />
        </>
    );
}

