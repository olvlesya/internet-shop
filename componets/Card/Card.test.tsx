import React from "react";
import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  test("Content visible", () => {
    const id = 1;
    const title = "title";
    const price = 1000;
    const image = "image";
    const description = "description";

    const container = render(
      <Card
        id={id}
        category=""
        title={title}
        price={price}
        image={image}
        description={description}
      />
    );
    expect(container.getByText(title)).toBeInTheDocument();
    expect(container.getByText(`$${price}`)).toBeInTheDocument();
    expect(container.getByText(description)).toBeInTheDocument();
    expect(container.getByRole("img")).toBeInTheDocument();
  });
});
