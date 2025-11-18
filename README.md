# **Q-01: TypeScript এ Interface ও Type-এর মধ্যে মূল পার্থক্যগুলো**
TypeScript ব্যবহার করার সময় আমরা প্রায়ই **interface** এবং **type alias** দুটোই দেখতে পাই। অনেক সময় এগুলো একই রকম মনে হয়, কারণ দুটিই ডেটার কাঠামো (shape) বা টাইপ সংজ্ঞায়িত করতে ব্যবহার করা যায়।

তবে বাস্তবে এদের মধ্যে কয়েকটি গুরুত্বপূর্ণ পার্থক্য আছে। এই ব্লগে আমরা এদের মধ্যের সেই মূল পার্থক্যগুলো আলোচনা করব।

---

## **1. Interface আর Type এর ব্যবহার বা উদ্দেশ্য**
TypeScript-এ interface মূলত কোনো অবজেক্ট কেমন হবে তার কাঠামো বর্ণনা করতে ব্যবহৃত হয়।
উদাহরণ:

```ts
interface User {
  id: number;
  name: string;
}
```

Type alias দিয়েও একই জিনিস করা যায়:

```ts
type User = {
  id: number;
  name: string;
};
```

দুটোই কাজ করবে। কিন্তু interface এই কাজে বেশি স্বাভাবিক। কিন্তু Type alias শুধু Object নয় union, tuple, primitive, function signature ইত্যাদিও বর্ণনা করতে পারে।

```ts
type ID = number | string;
type Point = [number, number];
```

কিন্তু interface দিয়ে এগুলো করা যায় না। এ কারণে type alias বেশি flexible।

---
 
## **2. Interfaces declaration merging সাপোর্ট করে**
একই নামে দুটি interface লিখলে TypeScript তাদের একত্রে merge করে ফেলে। এটি interfaces-এর একটি বড় বৈশিষ্ট্য।

```ts
interface User {
  id: number;
}

interface User {
  name: string;
}
```
এখন User ইন্টারফেসে থাকবে: `{ id: number; name: string }` 
কিন্তু type alias কখনও merge হয় না।
একই নামে আবার type লিখলে error দেবে।
 
 ---

## **3. Extend করার নিয়ম**
Interfaces খুব সহজে extend করা যায়:

```ts
interface User {
  id: number;
}

interface Admin extends User {
  isAdmin: boolean;
}
```

Type alias-ও extend করা যায়, কিন্তু interface-এর মতো স্বাধীনভাবে merge হয় না।

---
 
## **4. কোনটা কখন ব্যবহার করবেন?**

সহজ নিয়ম:

*	যদি আপনি **অবজেক্টের স্ট্রাকচার বা Class** নির্ধারণ করতে চান → interface ব্যবহার করুন।
*	যদি **union, tuple, primitive** বা **জটিল টাইপ** প্রয়োজন হয় → type alias বেছে নিন।
*	যদি অনেক ডেভেলপার একই মডেল expand করতে পারে এমন কিছু চান → interface ভালো।

---

# **সারসংক্ষেপ**

Interface এবং Type - দুটোই TypeScript-এর পাওয়ারফুল ফিচার। Interface বেশি স্ট্রাকচার্ড এবং OOP-ফ্রেন্ডলি, আর Type বেশি ফ্লেক্সিবল এবং ফাংশনাল প্রোগ্রামিং-এর জন্য উপযোগী।

---
<br><br>
---



# **Q-03: TypeScript-এ any, unknown এবং never এর পার্থক্য**

TypeScript কোডকে আরও নিরাপদ ও অনুমানযোগ্য করতে বিভিন্ন ধরনের টাইপ ব্যবহার করা হয়। এর মধ্যে **any**, **unknown**, এবং **never**—তিনটি বিশেষ টাইপ, যাদের আচরণ একে অন্যের থেকে সম্পূর্ণ আলাদা। ভুলভাবে ব্যবহার করলে কোড দুর্বল হতে পারে, আর সঠিকভাবে ব্যবহার করলে TypeScript-এর টাইপ সেফটি অনেক বেড়ে যায়।

এই ব্লগে আমরা এই তিনটি টাইপের পার্থক্য সহজভাবে বুঝার চেষ্টা করবো ।

---

## **1. any — সবচেয়ে কম নিরাপদ টাইপ**

`any` টাইপ TypeScript-এর টাইপ-চেকিং সম্পূর্ণ বন্ধ করে দেয়।
মানে, যেকোনো মান এতে রাখা যাবে, যেকোনো অপারেশন করা যাবে এবং পরবর্তীতে যেকোনো type-এ পরিবর্তন করা যাবে। TypeScript কোনো ভুল ধরবে না।

### উদাহরণ:

```ts
let value: any = "Hello";
value = 10;
value = true;
value.nonExistingMethod(); // কোনো error দেবে না
```

### কখন ব্যবহার করবেন?

* যতটা সম্ভব **এড়ানো উচিত**।
* খুব জরুরি অবস্থায়, থার্ড-পার্টি লাইব্রেরি বা unknown ডেটা হ্যান্ডেল করতে হলে ব্যবহার করা যায়।

---

## **2. unknown — নিরাপদ any**

`unknown` হলো `any`-এর নিরাপদ সংস্করণ।
এটিতে যেকোনো মান রাখা গেলেও, ব্যবহার করার আগে **টাইপ-চেক বাধ্যতামূলক**।

### উদাহরণ:

```ts
let data: unknown = "Hello";

data.toUpperCase(); // ❌ Error — আগে টাইপ চেক করতে হবে

if (typeof data === "string") {
  console.log(data.toUpperCase()); // ✅ no error
}
```

### unknown ব্যবহার করবেন যখন:

* আপনি নিশ্চিত নন যে মানটি কোন টাইপের হবে।
* ডেটা আগে validate করে ব্যবহার করতে হবে।

---

## **3. never — এমন টাইপ যার কখনোই কোনো মান থাকে না**

`never` সেই টাইপ যা *কখনোই ঘটে না* এমন কিছু বোঝায়।

### কখন never হয়?

১. **ফাংশন কখনো রিটার্ন না করলে**

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

২. **সর্বদা লুপ্‌ চলতে থাকলে**

```ts
function infiniteLoop(): never {
  while (true) {}
}
```

৩. **টাইপের মধ্যে অসম্ভব পরিস্থিতিতে**

```ts
type Shape = { type: "circle" } | { type: "square" };

function handleShape(shape: Shape) {
  if (shape.type === "circle") {
    // do something
  } else if (shape.type === "square") {
    // do something
  } else {
    const nothing: never = shape; // ❌ অসম্ভব কেস
  }
}
```

### never ব্যবহার হয়:

* exhaustive checking (সব কেস handle করা হয়েছে কিনা)
* error-handling functions. (যে function error through করবে)
* unreachable code validate করতে। (যা কখনো সম্ভব নই )

---



# **সারসংক্ষেপ**

* **any** → শক্তিশালী কিন্তু বিপজ্জনক—সব টাইপ-চেক বন্ধ করে দেয়
* **unknown** → নিরাপদ any—চেক করতে বাধ্য করে
* **never** → এমন টাইপ যার কোনো মানই নেই (error বা infinite loop অবস্থায়)

এই তিনটি টাইপ ঠিক সময়ে ঠিকভাবে ব্যবহার করতে পারলে TypeScript কোড অনেক বেশি নিরাপদ, পরিষ্কার ও maintainable হবে।

---
