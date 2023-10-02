# Pagination

Pagination is a component that allows you to navigate through pages of related content.

## Overview

Pagination is typically used for pagination of search results or other content where you have a large number of items that are broken into pages. Baskito supports the default Laravel's pagination system. You can read more about it [here](https://laravel.com/docs/10.x/pagination).

## Basic Example

<script setup lang="ts">
import { BKPaginationLink } from "@timedoor/baskito-ui";

type Users = {
  links: BKPaginationLink[];
};

const users: Users = {
  links: [
    {
      url: "#",
      label: "« Previous",
      active: false,
    },
    {
      url: "#",
      label: "1",
      active: true,
    },
    {
      url: "#",
      label: "2",
      active: false,
    },
    {
      url: "#",
      label: "3",
      active: false,
    },
    {
      url: "#",
      label: "4",
      active: false,
    },
    {
      url: "#",
      label: "5",
      active: false,
    },
    {
      url: "#",
      label: "Next »",
      active: false,
    },
  ],
};
</script>

<div class="card-body">
  <BKPagination :links="users.links" />
</div>

```php
$users = App\Models\User::paginate(5);
```

```vue
<script setup lang="ts">
import { BKPaginationData } from "@timedoor/baskito-ui";

interface User {
  id: number;
  name: string;
  email: string;
}

defineProps<{
  users: BKPaginationData<User>;
}>();
</script>
```

```html
<BKPagination :links="users.links" />
```

You can also use `<BKPagination>` component with laravel [resource collection](https://laravel.com/docs/10.x/eloquent-resources).

```php
$users           = App\Models\User::paginate(5);
$usersCollection = App\Http\Resources\UserResource::collection($users);
```

```vue
<script setup lang="ts">
import { BKResourceCollection } from "@timedoor/baskito-ui";

interface User {
  id: number;
  name: string;
  email: string;
}

defineProps<{
  usersCollection: BKResourceCollection<User>;
}>();
</script>
```

```html
<BKPagination :links="usersCollection.meta.links" />
```

You can see interface of links properties [here](https://github.com/backend-timedoor/baskito-ui/blob/master/src/types/components/Pagination/BKPagination.ts)

## Component Options

| Prop           | Type    | Default | Description                                 |
| -------------- | ------- | ------- | ------------------------------------------- |
| links          | Array   | `null`  | An array of links to be displayed.          |
| preserveScroll | Boolean | `false` | Preserve scroll position after page change. |
| perserveState  | Boolean | `false` | Preserve state after page change.           |
