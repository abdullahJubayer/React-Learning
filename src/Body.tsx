import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export function Body() {
  let pinItems: Array<number> = [1, 2];
  let items: Array<number> = [1, 2, 3, 4, 5];

  return (
    <div className="bg-pink-500 h-screen">
      <div className="bg-gray-600 w-2/3 h-screen rounded-md shadow-md mx-auto">
        <Form />
        {pinItems.map((data) => (
          <ListItem key={data} />
        ))}
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        {items.map((data) => (
          <ListItem key={data} />
        ))}
      </div>
    </div>
  );
}
