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

Interface এবং Type - দুটোই TypeScript-এর পাওয়ারফুল ফিচার। Interface বেশি স্ট্রাকচার্ড এবং OOP-ফ্রেন্ডলি, আর Type বেশি ফ্লেক্সিবল এবং ফাংশনাল প্রোগ্রামিং-এর জন্য উপযোগী।

---