import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowRight, ExternalLink } from 'lucide-react';

const blogsList = [
  {
    name: 'Introduction to JS',
    date: new Date(),
    description:
      'JavaScript is one of the most popular programming languages in the world, and for good reason. It is a powerful language that can be used to create dynamic and interactive web pages. In this blog post, we will . . .',
    url: 'https://medium.com/dev-genius/introduction-to-js-8faa38730867',
  },
  {
    name: 'Type Conversion in JS',
    date: new Date(),
    description:
      'When we need to convert a value from one data type to another in JavaScript, we can perform either implicit or explicit type conversion. Implicit type conversion is performed automatically by JavaScript, . . .',
    url: 'https://medium.com/dev-genius/typeconversion-in-js-835139b25d0c',
  },
  {
    name: 'Functions in JS (Named & Anonymous)',
    date: new Date(),
    description:
      'JavaScript is a programming language used mainly for creating interactive web pages. One of its most powerful features is the ability to create functions, which are reusable blocks of code that perform a . . .',
    url: 'https://medium.com/dev-genius/functions-in-js-named-anonymous-c337738a049b',
  },
  {
    name: 'Array in JS',
    date: new Date(),
    description:
      'JavaScript is an incredibly popular programming language and one of the reasons it is so popular is because of the versatility of arrays in JavaScript. Arrays in JavaScript are used to store multiple values in a . . .',
    url: 'https://medium.com/dev-genius/array-in-js-1b4553a86e12',
  },
  {
    name: 'Prototype in JS',
    date: new Date(),
    description:
      'JavaScript is an object-oriented programming (OOP) language that uses prototypes instead of classes for creating objects. Prototypes are a fundamental concept in JavaScript and understanding them is essent . . .',
    url: 'https://medium.com/@htmujahid/protype-in-js-73f86d257ade',
  },
  {
    name: 'Function Binding in JS',
    date: new Date(),
    description:
      'JavaScript is a versatile language that allows developers to create complex applications with ease. One of the language’s most powerful features is its ability to manipulate the behavior of functions through . . .',
    url: 'https://medium.com/@htmujahid/function-binding-in-js-cdfa94080717',
  },
  {
    name: 'Asynchronous Programming in JS',
    date: new Date(),
    description:
      'Asynchronous programming is a way of writing non-blocking code in JavaScript. In traditional programming, code runs sequentially from top to bottom, which means that one line of code is executed at a time . . .',
    url: 'https://medium.com/@htmujahid/asynchronous-programming-in-js-ba600b3f6ca0',
  },
  {
    name: 'Call Stack and Callback Queue in JS',
    date: new Date(),
    description:
      'JavaScript is a single-threaded language, which means it can only perform one task at a time. However, it is capable of handling multiple tasks simultaneously using the concept of Call Stack. The Call Stack is a . . .',
    url: 'https://medium.com/@htmujahid/call-stack-and-callback-queue-in-js-7967d3f11427',
  },
  {
    name: 'Iterator, Generator and Closure in JS',
    date: new Date(),
    description:
      'JavaScript is a versatile language that supports several powerful features that make it easier to write efficient, reusable, and modular code. In this blog post, we’ll take a closer look at three such features . . .',
    url: 'https://medium.com/@htmujahid/iterator-generator-and-closure-in-js-f941b24cbc99',
  },
  {
    name: 'Proxy in JS',
    date: new Date(),
    description:
      'JavaScript Proxy is a powerful feature that was introduced in ECMAScript 6 (ES6) that allows us to intercept and customize operations performed on objects. It allows us to define custom . . .',
    url: 'https://medium.com/@htmujahid/proxy-in-js-1721d6c771b1',
  },
  {
    name: 'Advance Concepts of Events in JS: Bubbling, Capturing',
    date: new Date(),
    description:
      'Events in JavaScript are a fundamental part of building interactive web applications. They allow us to respond to user actions, such as clicking . . .',
    url: 'https://medium.com/@htmujahid/advance-concepts-of-events-in-js-bubbling-capturing-8161baf13b3e',
  },
  {
    name: 'Working with APIs in JS',
    date: new Date(),
    description:
      'Working with APIs in JavaScript involves making requests to an external server to retrieve or send data. In this blog post, we will discuss the basics of working with APIs in JavaScript, including how to . . .',
    url: 'https://medium.com/@htmujahid/working-with-apis-in-js-3f64fe711536',
  },
];

export default function Blogs({ limit }: { limit?: number }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blogs</h1>
        {limit && (
          <Link href="/blogs">
            <ArrowRight className="w-6 h-6" />
          </Link>
        )}
      </div>
      <div className="pt-4 space-y-4">
        {blogsList.slice(0, limit ?? blogsList.length).map((blog, index) => (
          <Blog blog={blog} key={index} />
        ))}
      </div>
    </div>
  );
}

export function Blog({ blog }: { blog: (typeof blogsList)[0] }) {
  return (
    <Card>
      {/* <div className="flex flex-col p-4 border rounded-lg md:flex-row border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800"> */}
      <CardHeader>
        <div className="flex justify-between items-cente">
          <CardTitle>{blog.name}</CardTitle>
          <a href={blog.url} target="_blank">
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <p className="text-xs">{blog.date?.toDateString()}</p>
        <CardDescription>{blog.description}</CardDescription>
      </CardHeader>
      {/* </div> */}
    </Card>
  );
}
