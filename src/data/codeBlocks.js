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
