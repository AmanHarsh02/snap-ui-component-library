export const avatarBasicCode = `<Avatar size="sm" name="James" shadow="sm" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000" />

<Avatar size="md" name="Diana" shadow="md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbmJrjAzWu0Wdi6AgwbiOFeTbdVJI0uGKgECftRzt4_YavyZxe7qYmFtuBOmEy2Xw47M8&usqp=CAU" />

<Avatar size="lg" name="Zach" shadow="lg" src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" />`;

export const alertBasicCode = `<Alert status="error">
    There was an error processing your request.
</Alert>

<Alert status="success">
  Data uploaded to the server successfully.
</Alert>

<Alert status="warn">
  Seems your account is about to expire, upgrade now.
</Alert>

<Alert status="info">
    Sale is going live on 1 November, 2023.
</Alert>`;

export const badgeBasicCode = `<Badge size="sm" text="New" status="primary" />

<Badge size="md" text="In Progress" status="secondary" />

<Badge size="lg" text="Completed" status="success" />

<Badge size="md" text="Error" status="error" />`;

export const buttonBasicCode = `<Button type="solid" variant="primary" onClick={handleClick}>
        Solid Button
</Button>

<Button type="solid" variant="secondary" onClick={handleClick} disabled>
        Solid Button
</Button>

<Button type="outline" variant="success" onClick={handleClick}>
        Outline Button
</Button>

<Button type="ghost" variant="error" onClick={handleClick}>
        Ghost Button
</Button>

<Button type="link" href="https://www.google.com/">
        Link Button
</Button>`;

export const iconButtonCode = `<IconButton icon={<SearchIcon size={20}  className="icon" />} type="solid" variant="primary" onClick={handleClick}>
        Search
</IconButton>

<IconButton icon={<EditIcon size={20} className="icon" />} type="outline" variant="secondary" onClick={handleClick}>
        Edit
</IconButton>

<IconButton icon={<DeleteIcon size={20} className="icon" />} type="ghost" variant="error" onClick={handleClick}>
        Delete
</IconButton>

<IconButton icon={<AddIcon size={20} className="icon" />} type="ghost" variant="success" onClick={handleClick}>
        Add
</IconButton>`;

export const floatingActionButtonCode = `<FloatingActionButton type="solid" variant="primary" onClick={handleClick}>
        <AddIcon size={20} className="icon" />
</FloatingActionButton>

<FloatingActionButton type="outline" variant="success" onClick={handleClick}>
        <EditIcon size={20} className="icon" />
</FloatingActionButton>`;

export const cardCode = `<Card>
        This is a text only card.
</Card>

<Card headingText="Test Heading">
        This is a card with heading.
</Card>

<Card headingText="Test Heading" border="sm">
        This is a card with small border.
</Card>

<Card
  headingText="Test Heading"
  border="md"
  showActionButtons={true}
  successActionText="Accept"
  rejectActionText="Reject"
>
        This is a card with action buttons and medium border
</Card>

<Card
  imageSrc="https://images.unsplash.com/photo-1599664223843-9349c75196bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  shadow="lg"
>
        This is a card with an image and text.
</Card>

<Card
  imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
  headingText="Test Heading"
  layout="horizontal"
>
        This is a horizontal card with image.
</Card>`;

export const headingCode = `<Heading size="xl" weight="bolder">
        Extra Large Heading
</Heading>

<Heading size="lg" weight="bold">
        Large Heading
</Heading>

<Heading size="md" weight="semi-bold">
        Medium Heading
</Heading>

<Heading size="sm" weight="normal">
        Small Heading
</Heading>

<Heading size="xs" weight="light">
        Extra Small Heading
</Heading>`;
