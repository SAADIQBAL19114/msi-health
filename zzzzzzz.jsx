// Button component

<>
  {/* <Button children={"hello world"} /> */}
  <Button
    // styles="flex justify-center flex-row"
    styles={`flex items-center bg-primary-100`}
    children={"Take an Appointment"}
    iconStyle={""}
    // href={"http://www.google.com"}
    // icon={<Arrow />}
  />

    {/* Button with icon */}
  <Button
    // styles="flex justify-center flex-row"
    styles={``}
    children={"Take an Appointment"}
    iconStyle={""}
    href={"/customs"}
    icon={<Arrow />}
  />
  {/* <Arrow /> */}
</>;

// List Item 

<div className="bg-primary-100">
  <ListItem
    text="90919 Madie run Apt. 790"
    icon={<Location />}
    textStyle={"color-white"}
  />
</div>;


