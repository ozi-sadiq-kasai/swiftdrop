import restaurant from './assets/images/restaurant.png'
import supermarket from './assets/images/supermarket.png'
import pharmacy from './assets/images/pharmacy.png'
import drinks from './assets/images/drinks.png'
import fitfam from './assets/images/fitfam.png'
import meal from './assets/images/meal.png'
import iyabasira from './assets/images/iyabasira.png'
import chickenRepublic from './assets/images/chickenRepublic.jpg'
import cbae from './assets/images/cbae.jpg'
import chicken from './assets/images/chicken.jpg'
import chips from './assets/images/chips.jpg'
import shawarma from './assets/images/shawarma.jpg'
import amala from './assets/images/amala.jpg'
import rice from './assets/images/rice.jpg'
import pizza from './assets/images/pizza.jpg'
import spaghetti from './assets/images/spaghetti.jpg'
import burger from './assets/images/burger.jpg'
import salad from './assets/images/salad.jpg'
import poundo from './assets/images/poundo.jpg'
import marketsquare from './assets/images/marketsquare.jpg'
import tissue from './assets/images/tissue.png'
import Peak from './assets/images/Peak.png'
import omo from './assets/images/omo.png'
import indomie from './assets/images/indomie.png'

export const icons =[ 

 {
  iid :'rid',
  name:'restaurant',
  icon:restaurant
 },
  {
   iid: 'sid',
  name:'supermarket',
  icon:supermarket
 },
  {
   iid: 'pid',
  name:'pharmacy',
  icon:pharmacy
 },
  {
    iid: 'did',
  name:'drinks',
  icon: drinks
 },
 {
   iid: 'fid',
  name:'fitfam',
  icon: fitfam
 },
 {
   iid: 'mid',
  name:'meal',
  icon:meal
 }

]

export const foodItems =[
 {
   id:'cr2',
   sid:1,
  image:chicken,
  name:'Coated Chicken',
  price:6000
 },
 {
   id:'cr2',
    sid:2,
  image:chips,
  name:'Chips',
  price:5000
 },
 {
   id:'cr2',
   sid:3,
  image:salad,
  name:'salad',
  price:2000
 },
 {
   id:'cb1',
   sid:4,
  image:shawarma,
  name:'Shawarma',
  price:6000
 },
  {
   id:'cb1',
    sid:5,
  image:spaghetti,
  name:'Spaghetti',
  price:6000
 },
  {
   id:'b1',
    sid:6,
  image:rice,
  name:'Rice',
  price:6000
 },
 {
  id:'cb1',
  sid:7,
  image:burger,
  name:'Burger',
  price:2300
 },
 {
  id:'cb1',
  sid:8,
  image:pizza,
  name:'Pizza',
  price:10000
 },
 {
   id:'ib3',
   sid:9,
  image:amala,
  name:'Amala',
  price:2000
 },
  {
   id:'ib3',
   sid:10,
  image:poundo,
  name:'Poundo',
  price:2000
 },
  {
   id:'ms',
   sid:11,
  image:tissue,
  name:'tissue',
  price:1200
 },
{
 id:'ms',
 sid:12,
 image:indomie,
 name:'Indomie',
 price:150
 }, 
{
 id:'ms',
 sid:13,
 image:omo,
 name:'Omo',
 price:1500
 }, 
{
 id:'ms',
 sid:14,
 image:Peak,
 name:'Peak',
 price:1500
 }, 
]


export const places =[
 {
  id:'cb1',
  iid:'rid',
  name:'CBAE',
  image:cbae,
  specialty:'culinary dishes'
 },
  {
  id:'ib3',
  iid:'rid',
  name:'IYA BASIRA',
  image:iyabasira,
  specialty:'African Dishes'
 },
 {
  id:'cr2',
  iid:'rid',
  name:'CHICKEN REPUBLIC',
  image:chickenRepublic,
  specialty:'snacks, continental dishes'
 },

  {
  id:'ms',
  iid:'sid',
  name:'MARKET SQUARE',
  image:marketsquare,
  specialty:'EVERYTING UNDER ONE ROOF'
 },

]