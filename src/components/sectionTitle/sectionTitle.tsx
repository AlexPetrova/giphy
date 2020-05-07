import React from "react";
import "./sectionTitle.css";

export function SectionTitle(props: { title: string }) {
    return (
        <h1 className="section-title">{props.title}</h1>
    )
}