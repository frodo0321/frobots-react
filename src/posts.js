//import LightControlOverInternet from "./components/posts/LightControlOverInternet";
import TestPost from "./components/posts/TestPost";
//const CSSPreprocessors = require("./components/posts/CSSPreprocessors");

var posts = [{
    title: "Test Post",
    date: new Date(),
    public: true,
    published: true,
    component: TestPost
}, 
require("./components/posts/LightControlOverInternet"), 
require("./components/posts/ComputerVisionSecuritySystem"), {
//}, {
//    title: "Light Control over the Internet",
//    date: new Date("2015-01-13 22:37:42"),
//    component: LightControlOverInternet
//}, {
//    title: "How binary numbers work",
//    date: new Date(),
//}, {
//    title: "How to add Google AdSense on WordPress",
//    date: new Date(),
//}, {
//    title: "How to backup a WordPress blog",
//    date: new Date(),
//}, {
//    title: "Building a social network app with reactjs and nodejs Part 2: Creating SPA with react.js",
//    date: new Date(),
//}, {
//    title: "How to add jQuery to WordPress",
//    date: new Date(),
//}, {
    title: "How a computer cpu works",
    public: true,
    published: true,
    date: new Date(),
}, {
    title: "Emulating Ruby's string interpolation in Python",
    public: true,
    published: true,
    date: new Date(),
}, {
    title: "Server Load Balancing Tutorial",
    public: true,
    published: true,
    date: new Date(),
}, {
    title: "Monitoring Stocks With Grafana",
    public: true,
    published: true,
    date: new Date(),
}, {
    title: "How to create a WordPress website",
    public: true,
    published: true,
    date: new Date(),
}, {
    title: "How to add google analytics on a WordPress site",
    public: true,
    published: true,
    date: new Date(),
}, {
    title: "Building a social network app with reactjs and nodejs Part 1: Project Planning",
    public: true,
    published: true,
    date: new Date(),
}, {
    title: "Using ~/.ssh/config to manage many servers",
    public: true,
    published: true,
    date: new Date(),
}, {
    title: "How to use nodejs inspect from a remote server",
    public: true,
    published: true,
    date: new Date(),
}, require("./components/posts/CSSPreprocessors")];


export default posts;
