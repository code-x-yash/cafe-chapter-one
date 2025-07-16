"use client"

import { useState, useContext } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  X,
  Star,
  Coffee,
  Utensils,
  IceCream,
  Pizza,
  Soup,
  Plus,
  ShoppingCart,
  Eye,
  ImageIcon,
  ChevronLeft,
  ChevronRight,
  Crown,
} from "lucide-react"
import { CartContext } from "@/contexts/cart-context"

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  halfPrice?: number
  image: string
  category: string
  section: string
  isRecommended?: boolean
  isBestSeller?: boolean
  isVeg: boolean
  hasEgg: boolean
  isSpicy?: boolean
}

const menuItems: MenuItem[] = [
  // Best Sellers
  {
    id: 1,
    name: "Hazelnut Cold Coffee",
    description: "Premium cold coffee with rich hazelnut flavor and whipped cream",
    price: 149,
    image: "/images/coffee-service.jpg",
    category: "Beverages & Desserts",
    section: "Coffee",
    isVeg: true,
    hasEgg: false,
    isRecommended: true,
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Chicken Supreme Pizza",
    description: "Loaded pizza with tender chicken, bell peppers, onions and mozzarella cheese",
    price: 280,
    image: "/images/signature-dish.jpg",
    category: "Main Course",
    section: "Pizza",
    isVeg: false,
    hasEgg: false,
    isRecommended: true,
    isBestSeller: true,
  },
  {
    id: 3,
    name: "Steamed Chicken Momo",
    description: "Traditional steamed dumplings filled with spiced chicken and served with spicy chutney",
    price: 180,
    halfPrice: 150,
    image: "/images/food-drinks.jpg",
    category: "Appetizers",
    section: "Momo",
    isVeg: false,
    hasEgg: false,
    isRecommended: true,
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Chocolate Brownie Waffle",
    description: "Crispy waffle topped with warm chocolate brownie and vanilla ice cream",
    price: 160,
    halfPrice: 90,
    image: "/images/menu-shakes-waffles.jpg",
    category: "Beverages & Desserts",
    section: "Waffles",
    isVeg: true,
    hasEgg: true,
    isRecommended: true,
    isBestSeller: true,
  },
  {
    id: 5,
    name: "Schezwan Noodles",
    description: "Spicy stir-fried noodles with vegetables in authentic Schezwan sauce",
    price: 240,
    halfPrice: 200,
    image: "/images/menu-noodles-gravy.jpg",
    category: "Asian Cuisine",
    section: "Noodles",
    isVeg: true,
    hasEgg: false,
    isSpicy: true,
    isRecommended: true,
    isBestSeller: true,
  },
  {
    id: 6,
    name: "Double Decker Burger",
    description: "Double patty burger with cheese, lettuce, tomato and our special sauce",
    price: 250,
    halfPrice: 200,
    image: "/images/menu-pizza-burgers.jpg",
    category: "Main Course",
    section: "Burger",
    isVeg: false,
    hasEgg: false,
    isRecommended: true,
    isBestSeller: true,
  },

  // Regular Menu Items
  {
    id: 7,
    name: "Vanilla Shake",
    description: "Creamy vanilla milkshake made with premium ice cream",
    price: 99,
    image: "/images/menu-shakes-waffles.jpg",
    category: "Beverages & Desserts",
    section: "Shakes",
    isVeg: true,
    hasEgg: false,
  },
  {
    id: 8,
    name: "Chocolate Shake",
    description: "Rich chocolate milkshake with whipped cream",
    price: 99,
    image: "/images/menu-shakes-waffles.jpg",
    category: "Beverages & Desserts",
    section: "Shakes",
    isVeg: true,
    hasEgg: false,
  },
  {
    id: 9,
    name: "Mango Shake",
    description: "Fresh mango shake made with seasonal mangoes",
    price: 99,
    image: "/images/menu-shakes-waffles.jpg",
    category: "Beverages & Desserts",
    section: "Shakes",
    isVeg: true,
    hasEgg: false,
  },
  {
    id: 10,
    name: "Cold Coffee",
    description: "Refreshing iced coffee with milk and sugar",
    price: 99,
    image: "/images/menu-shakes-waffles.jpg",
    category: "Beverages & Desserts",
    section: "Coffee",
    isVeg: true,
    hasEgg: false,
  },
  {
    id: 11,
    name: "Classic Vanilla Waffle",
    description: "Crispy waffle served with vanilla ice cream",
    price: 160,
    halfPrice: 90,
    image: "/images/menu-shakes-waffles.jpg",
    category: "Beverages & Desserts",
    section: "Waffles",
    isVeg: true,
    hasEgg: true,
  },
  {
    id: 12,
    name: "Brownie with Ice-cream",
    description: "Warm chocolate brownie served with vanilla ice cream",
    price: 150,
    image: "/images/menu-shakes-waffles.jpg",
    category: "Beverages & Desserts",
    section: "Desserts",
    isVeg: true,
    hasEgg: true,
  },
  {
    id: 13,
    name: "Vegetable Roll",
    description: "Fresh vegetables wrapped in soft tortilla",
    price: 89,
    image: "/images/menu-rolls-nachos.jpg",
    category: "Snacks & Light Meals",
    section: "Rolls",
    isVeg: true,
    hasEgg: false,
  },
  {
    id: 14,
    name: "Paneer Roll",
    description: "Grilled paneer with vegetables in tortilla wrap",
    price: 130,
    image: "/images/menu-rolls-nachos.jpg",
    category: "Snacks & Light Meals",
    section: "Rolls",
    isVeg: true,
    hasEgg: false,
  },
  {
    id: 15,
    name: "Chicken Roll",
    description: "Spiced chicken with fresh vegetables in wrap",
    price: 150,
    image: "/images/menu-rolls-nachos.jpg",
    category: "Snacks & Light Meals",
    section: "Rolls",
    isVeg: false,
    hasEgg: false,
    isSpicy: true,
  },
  {
    id: 16,
    name: "Cheesy Nachos",
    description: "Crispy nachos topped with melted cheese",
    price: 89,
    image: "/images/menu-rolls-nachos.jpg",
    category: "Snacks & Light Meals",
    section: "Nachos",
    isVeg: true,
    hasEgg: false,
  },
  {
    id: 17,
    name: "Chicken Nachos",
    description: "Nachos topped with spiced chicken and cheese",
    price: 119,
    image: "/images/menu-rolls-nachos.jpg",
    category: "Snacks & Light Meals",
    section: "Nachos",
    isVeg: false,
    hasEgg: false,
    isSpicy: true,
  },
  {
    id: 18,
    name: "Cheese Maggi",
    description: "Maggi noodles with extra cheese topping",
    price: 89,
    image: "/images/menu-rolls-nachos.jpg",
    category: "Snacks & Light Meals",
    section: "Maggi",
    isVeg: true,
    hasEgg: false,
  },
  {
    id: 19,
    name: "Hash Browns",
    description: "Crispy golden hash browns served with sauce",
    price: 109,
    halfPrice: 69,
    image: "/images/menu-starters-momos.jpg",
    category: "Appetizers",
    section: "Vegetable Starters",
    isVeg: true,
    hasEgg: false,
  },
  {
    id: 20,
    name: "Chilli Paneer",
    description: "Spicy paneer cubes in Indo-Chinese sauce",
    price: 240,
    image: "/images/menu-starters-momos.jpg",
    category: "Appetizers",
    section: "Vegetable Starters",
    isVeg: true,
    hasEgg: false,
    isSpicy: true,
  },
  {
    id: 21,
    name: "Fried Chicken Momo",
    description: "Crispy fried dumplings with chicken filling",
    price: 200,
    halfPrice: 170,
    image: "/images/menu-starters-momos.jpg",
    category: "Appetizers",
    section: "Momo",
    isVeg: false,
    hasEgg: false,
    isSpicy: true,
  },
  {
    id: 22,
    name: "Manchow Soup",
    description: "Spicy Indo-Chinese soup with vegetables",
    price: 120,
    halfPrice: 100,
    image: "/images/menu-starters-momos.jpg",
    category: "Appetizers",
    section: "Soup",
    isVeg: true,
    hasEgg: false,
    isSpicy: true,
  },
  {
    id: 23,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella and basil",
    price: 220,
    image: "/images/menu-pizza-burgers.jpg",
    category: "Main Course",
    section: "Pizza",
    isVeg: true,
    hasEgg: false,
  },
  {
    id: 24,
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato and sauce",
    price: 180,
    halfPrice: 150,
    image: "/images/menu-pizza-burgers.jpg",
    category: "Main Course",
    section: "Burger",
    isVeg: false,
    hasEgg: false,
  },
  {
    id: 25,
    name: "Hakka Noodles",
    description: "Stir-fried noodles with vegetables in Chinese style",
    price: 220,
    halfPrice: 180,
    image: "/images/menu-noodles-gravy.jpg",
    category: "Asian Cuisine",
    section: "Noodles",
    isVeg: true,
    hasEgg: false,
  },
  {
    id: 26,
    name: "Vegetable Fried Rice",
    description: "Wok-fried rice with mixed vegetables",
    price: 220,
    halfPrice: 180,
    image: "/images/menu-sushi-rice.jpg",
    category: "Asian Cuisine",
    section: "Rice",
    isVeg: true,
    hasEgg: false,
  },
  {
    id: 27,
    name: "Chicken Fried Rice",
    description: "Fried rice with tender chicken pieces",
    price: 240,
    halfPrice: 200,
    image: "/images/menu-sushi-rice.jpg",
    category: "Asian Cuisine",
    section: "Rice",
    isVeg: false,
    hasEgg: false,
  },
]

const categories = ["All", "Beverages & Desserts", "Snacks & Light Meals", "Appetizers", "Main Course", "Asian Cuisine"]

const sections = [
  "All",
  "Shakes",
  "Coffee",
  "Waffles",
  "Rolls",
  "Nachos",
  "Maggi",
  "Momo",
  "Pizza",
  "Burger",
  "Noodles",
  "Rice",
]

const menuImages = [
  {
    id: 1,
    title: "Shakes & Waffles",
    image: "/images/menu-shakes-waffles.jpg",
    description: "Refreshing beverages and sweet treats",
  },
  {
    id: 2,
    title: "Rolls & Snacks",
    image: "/images/menu-rolls-nachos.jpg",
    description: "Light meals and quick bites",
  },
  {
    id: 3,
    title: "Starters & Momos",
    image: "/images/menu-starters-momos.jpg",
    description: "Appetizers and traditional dumplings",
  },
  {
    id: 4,
    title: "Pizza & Burgers",
    image: "/images/menu-pizza-burgers.jpg",
    description: "Hearty main courses and comfort food",
  },
  {
    id: 5,
    title: "Noodles & Gravy",
    image: "/images/menu-noodles-gravy.jpg",
    description: "Asian cuisine and flavorful gravies",
  },
  {
    id: 6,
    title: "Sushi & Rice",
    image: "/images/menu-sushi-rice.jpg",
    description: "Specialty items and rice dishes",
  },
]

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSection, setSelectedSection] = useState("All")
  const [viewMode, setViewMode] = useState<"sections" | "items" | "images">("sections")
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { addToCart, cartItems, getCartItemCount } = useContext(CartContext)

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory
    const sectionMatch = selectedSection === "All" || item.section === selectedSection
    return categoryMatch && sectionMatch
  })

  const bestSellers = menuItems.filter((item) => item.isBestSeller)

  const menuSections = [
    {
      id: 1,
      title: "Shakes & Waffles",
      description: "Refreshing shakes and crispy waffles with delicious toppings",
      image: "/images/menu-shakes-waffles.jpg",
      category: "Beverages & Desserts",
      itemCount: menuItems.filter((item) => item.image === "/images/menu-shakes-waffles.jpg").length,
    },
    {
      id: 2,
      title: "Rolls & Nachos",
      description: "Fresh rolls, crispy nachos, and comfort food favorites",
      image: "/images/menu-rolls-nachos.jpg",
      category: "Snacks & Light Meals",
      itemCount: menuItems.filter((item) => item.image === "/images/menu-rolls-nachos.jpg").length,
    },
    {
      id: 3,
      title: "Starters & Momos",
      description: "Delicious vegetable starters, soups, and authentic momos",
      image: "/images/menu-starters-momos.jpg",
      category: "Appetizers",
      itemCount: menuItems.filter((item) => item.image === "/images/menu-starters-momos.jpg").length,
    },
    {
      id: 4,
      title: "Pizza & Burgers",
      description: "Wood-fired pizzas, gourmet burgers, and crispy fries",
      image: "/images/menu-pizza-burgers.jpg",
      category: "Main Course",
      itemCount: menuItems.filter((item) => item.image === "/images/menu-pizza-burgers.jpg").length,
    },
    {
      id: 5,
      title: "Noodles & Gravy",
      description: "Asian noodles and rich gravy dishes with authentic flavors",
      image: "/images/menu-noodles-gravy.jpg",
      category: "Asian Cuisine",
      itemCount: menuItems.filter((item) => item.image === "/images/menu-noodles-gravy.jpg").length,
    },
    {
      id: 6,
      title: "Sushi & Rice",
      description: "Fresh sushi, flavorful rice dishes, and non-veg starters",
      image: "/images/menu-sushi-rice.jpg",
      category: "Specialty Items",
      itemCount: menuItems.filter((item) => item.image === "/images/menu-sushi-rice.jpg").length,
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Beverages & Desserts":
        return <IceCream className="h-5 w-5" />
      case "Main Course":
        return <Pizza className="h-5 w-5" />
      case "Asian Cuisine":
        return <Utensils className="h-5 w-5" />
      case "Appetizers":
        return <Soup className="h-5 w-5" />
      default:
        return <Coffee className="h-5 w-5" />
    }
  }

  const getDietaryBadge = (item: MenuItem) => {
    if (!item.isVeg && !item.hasEgg) {
      return (
        <Badge variant="destructive" className="text-xs">
          Non-Veg
        </Badge>
      )
    }
    if (item.hasEgg) {
      return (
        <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-800">
          Egg
        </Badge>
      )
    }
    return (
      <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
        Veg
      </Badge>
    )
  }

  const handleAddToCart = (item: MenuItem, isHalf = false) => {
    const price = isHalf && item.halfPrice ? item.halfPrice : item.price
    const size = isHalf ? "Half" : "Full"
    addToCart({
      id: `${item.id}-${size.toLowerCase()}`,
      name: `${item.name} (${size})`,
      price,
      image: item.image,
      quantity: 1,
    })
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % menuImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + menuImages.length) % menuImages.length)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream to-wood/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-coffee mb-6 fade-in">Our Menu</h1>
            <p className="text-xl text-warm-brown max-w-3xl mx-auto leading-relaxed slide-up font-medium mb-8">
              Discover our carefully crafted selection of dishes, from refreshing beverages to hearty main courses, all
              prepared with love and the finest ingredients.
            </p>

            {/* Cart Summary */}
            <div className="flex justify-center items-center gap-4 mb-6">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-gold text-gold hover:bg-gold hover:text-coffee bg-transparent"
              >
                <ShoppingCart className="h-5 w-5" />
                Cart ({getCartItemCount()})
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 bg-wood/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Crown className="h-8 w-8 text-gold" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee">Best Sellers</h2>
              <Crown className="h-8 w-8 text-gold" />
            </div>
            <p className="text-lg text-warm-brown max-w-2xl mx-auto">
              Our most popular dishes that keep customers coming back for more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSellers.map((item) => (
              <div key={item.id} className="menu-card group relative">
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-gold text-coffee font-bold flex items-center gap-1">
                    <Crown className="h-3 w-3" />
                    Best Seller
                  </Badge>
                </div>

                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={400}
                    height={200}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {getDietaryBadge(item)}
                    {item.isSpicy && (
                      <Badge variant="destructive" className="text-xs">
                        🌶️ Spicy
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <div className="mb-3">
                    <h3 className="font-serif text-lg font-bold text-coffee mb-1">{item.name}</h3>
                    <p className="text-warm-brown text-sm leading-relaxed">{item.description}</p>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                      <span className="text-gold font-bold text-lg">₹{item.price}</span>
                      {item.halfPrice && <span className="text-warm-brown/70 text-sm">Half: ₹{item.halfPrice}</span>}
                    </div>
                    <span className="text-xs text-warm-brown/70 bg-wood/10 px-2 py-1 rounded">{item.section}</span>
                  </div>

                  <div className="flex gap-2">
                    {item.halfPrice && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-gold text-gold hover:bg-gold hover:text-coffee text-xs bg-transparent"
                        onClick={() => handleAddToCart(item, true)}
                      >
                        <Plus className="h-3 w-3 mr-1" />
                        Half
                      </Button>
                    )}
                    <Button
                      size="sm"
                      className={`${item.halfPrice ? "flex-1" : "w-full"} btn-primary text-xs`}
                      onClick={() => handleAddToCart(item, false)}
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      {item.halfPrice ? "Full" : "Add"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* View Toggle */}
      <section className="py-6 bg-cream border-b border-wood/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 mb-6">
            <Button
              variant={viewMode === "sections" ? "default" : "outline"}
              className={`${
                viewMode === "sections"
                  ? "bg-gold hover:bg-gold/90 text-coffee"
                  : "border-gold text-gold hover:bg-gold hover:text-coffee"
              }`}
              onClick={() => setViewMode("sections")}
            >
              <Eye className="h-4 w-4 mr-2" />
              Menu Sections
            </Button>
            <Button
              variant={viewMode === "items" ? "default" : "outline"}
              className={`${
                viewMode === "items"
                  ? "bg-gold hover:bg-gold/90 text-coffee"
                  : "border-gold text-gold hover:bg-gold hover:text-coffee"
              }`}
              onClick={() => setViewMode("items")}
            >
              <Utensils className="h-4 w-4 mr-2" />
              Full Menu
            </Button>
            <Button
              variant={viewMode === "images" ? "default" : "outline"}
              className={`${
                viewMode === "images"
                  ? "bg-gold hover:bg-gold/90 text-coffee"
                  : "border-gold text-gold hover:bg-gold hover:text-coffee"
              }`}
              onClick={() => setViewMode("images")}
            >
              <ImageIcon className="h-4 w-4 mr-2" />
              Image Menu
            </Button>
          </div>

          {/* Category Filter (hide for image view) */}
          {viewMode !== "images" && (
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`${
                    selectedCategory === category
                      ? "bg-gold hover:bg-gold/90 text-coffee font-semibold"
                      : "border-2 border-gold text-gold hover:bg-gold hover:text-coffee font-semibold"
                  } flex items-center gap-2 px-6 py-3 text-base`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category !== "All" && getCategoryIcon(category)}
                  {category}
                </Button>
              ))}
            </div>
          )}

          {/* Section Filter (only show in items view) */}
          {viewMode === "items" && (
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {sections.map((section) => (
                <Button
                  key={section}
                  variant={selectedSection === section ? "secondary" : "ghost"}
                  size="sm"
                  className={`${
                    selectedSection === section ? "bg-wood/20 text-coffee" : "text-warm-brown hover:bg-wood/10"
                  }`}
                  onClick={() => setSelectedSection(section)}
                >
                  {section}
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === "images" ? (
            /* Image Menu View */
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl font-bold text-coffee mb-4">Complete Menu</h2>
                <p className="text-warm-brown">Browse our full menu in image format</p>
              </div>

              {/* Image Carousel */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl shadow-2xl bg-white">
                  <Image
                    src={menuImages[currentImageIndex].image || "/placeholder.svg"}
                    alt={menuImages[currentImageIndex].title}
                    width={800}
                    height={600}
                    className="object-contain w-full h-auto max-h-[70vh]"
                  />

                  {/* Navigation Arrows */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-coffee/60 hover:bg-coffee/80 text-cream"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-coffee/60 hover:bg-coffee/80 text-cream"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>

                  {/* Image Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-coffee/80 backdrop-blur-sm text-cream p-4">
                    <h3 className="font-serif text-xl font-bold mb-1">{menuImages[currentImageIndex].title}</h3>
                    <p className="text-cream/90">{menuImages[currentImageIndex].description}</p>
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex justify-center mt-6 gap-2 overflow-x-auto pb-2">
                  {menuImages.map((image, index) => (
                    <button
                      key={image.id}
                      className={`flex-shrink-0 relative overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                        index === currentImageIndex ? "border-gold" : "border-transparent"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <Image
                        src={image.image || "/placeholder.svg"}
                        alt={image.title}
                        width={100}
                        height={80}
                        className="object-cover w-20 h-16"
                      />
                      {index === currentImageIndex && <div className="absolute inset-0 bg-gold/20" />}
                    </button>
                  ))}
                </div>

                {/* Page Indicator */}
                <div className="text-center mt-4">
                  <span className="text-warm-brown font-medium">
                    {currentImageIndex + 1} of {menuImages.length}
                  </span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-8">
                <p className="text-warm-brown mb-4">Want to order specific items?</p>
                <Button className="btn-primary" onClick={() => setViewMode("items")}>
                  Browse Individual Items
                </Button>
              </div>
            </div>
          ) : viewMode === "sections" ? (
            /* Menu Sections View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuSections
                .filter((section) => selectedCategory === "All" || section.category === selectedCategory)
                .map((section) => (
                  <div key={section.id} className="menu-card group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <Image
                        src={section.image || "/placeholder.svg"}
                        alt={section.title}
                        width={400}
                        height={300}
                        className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-coffee/0 group-hover:bg-coffee/20 transition-colors duration-300" />
                      <div className="absolute top-4 right-4 bg-gold text-coffee px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        Popular
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-3">
                        <h3 className="font-serif text-2xl font-bold text-coffee group-hover:text-gold transition-colors duration-200 mb-2">
                          {section.title}
                        </h3>
                        <span className="text-sm text-warm-brown/80 bg-wood/10 px-3 py-1 rounded-full font-medium">
                          {section.category}
                        </span>
                      </div>
                      <p className="text-warm-brown leading-relaxed font-medium mb-4">{section.description}</p>
                      <div className="flex items-center justify-between">
                        <Button
                          className="btn-primary"
                          onClick={() => {
                            setViewMode("items")
                            setSelectedCategory(section.category)
                          }}
                        >
                          View Items
                        </Button>
                        <span className="text-warm-brown/70 text-sm font-medium">{section.itemCount} items</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            /* Full Menu Items View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="menu-card group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={400}
                      height={200}
                      className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {getDietaryBadge(item)}
                      {item.isBestSeller && (
                        <Badge className="bg-gold text-coffee text-xs">
                          <Crown className="h-3 w-3 mr-1" />
                          Best Seller
                        </Badge>
                      )}
                      {item.isRecommended && !item.isBestSeller && (
                        <Badge className="bg-gold text-coffee text-xs">
                          <Star className="h-3 w-3 mr-1" />
                          Recommended
                        </Badge>
                      )}
                      {item.isSpicy && (
                        <Badge variant="destructive" className="text-xs">
                          🌶️ Spicy
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="mb-3">
                      <h3 className="font-serif text-lg font-bold text-coffee mb-1">{item.name}</h3>
                      <p className="text-warm-brown text-sm leading-relaxed">{item.description}</p>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col">
                        <span className="text-gold font-bold text-lg">₹{item.price}</span>
                        {item.halfPrice && <span className="text-warm-brown/70 text-sm">Half: ₹{item.halfPrice}</span>}
                      </div>
                      <span className="text-xs text-warm-brown/70 bg-wood/10 px-2 py-1 rounded">{item.section}</span>
                    </div>

                    <div className="flex gap-2">
                      {item.halfPrice && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-gold text-gold hover:bg-gold hover:text-coffee text-xs bg-transparent"
                          onClick={() => handleAddToCart(item, true)}
                        >
                          <Plus className="h-3 w-3 mr-1" />
                          Half
                        </Button>
                      )}
                      <Button
                        size="sm"
                        className={`${item.halfPrice ? "flex-1" : "w-full"} btn-primary text-xs`}
                        onClick={() => handleAddToCart(item, false)}
                      >
                        <Plus className="h-3 w-3 mr-1" />
                        {item.halfPrice ? "Full" : "Add"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredItems.length === 0 && viewMode === "items" && (
            <div className="text-center py-12">
              <Coffee className="h-16 w-16 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold text-coffee mb-2">No items found</h3>
              <p className="text-warm-brown">Try adjusting your filters to see more items.</p>
            </div>
          )}
        </div>
      </section>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-coffee/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-cream rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative">
              <Image
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.name}
                width={600}
                height={300}
                className="object-cover w-full h-64"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-coffee/70 hover:bg-coffee/90 text-white shadow-lg"
                onClick={() => setSelectedItem(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="absolute top-4 left-4 flex gap-2">
                {getDietaryBadge(selectedItem)}
                {selectedItem.isBestSeller && (
                  <Badge className="bg-gold text-coffee">
                    <Crown className="h-4 w-4 mr-1" />
                    Best Seller
                  </Badge>
                )}
                {selectedItem.isRecommended && !selectedItem.isBestSeller && (
                  <Badge className="bg-gold text-coffee">
                    <Star className="h-4 w-4 mr-1" />
                    Recommended
                  </Badge>
                )}
              </div>
            </div>

            <div className="p-6">
              <h2 className="font-serif text-3xl font-bold text-coffee mb-4">{selectedItem.name}</h2>
              <p className="text-warm-brown leading-relaxed mb-6 text-lg">{selectedItem.description}</p>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-2xl font-bold text-gold">₹{selectedItem.price}</span>
                  {selectedItem.halfPrice && (
                    <span className="text-warm-brown/70 text-lg ml-4">Half: ₹{selectedItem.halfPrice}</span>
                  )}
                </div>
                <span className="text-warm-brown/80 bg-wood/10 px-3 py-1 rounded-full font-medium">
                  {selectedItem.section}
                </span>
              </div>

              <div className="flex gap-4">
                {selectedItem.halfPrice && (
                  <Button
                    className="flex-1 btn-secondary"
                    onClick={() => {
                      handleAddToCart(selectedItem, true)
                      setSelectedItem(null)
                    }}
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Add Half (₹{selectedItem.halfPrice})
                  </Button>
                )}
                <Button
                  className={`${selectedItem.halfPrice ? "flex-1" : "w-full"} btn-primary`}
                  onClick={() => {
                    handleAddToCart(selectedItem, false)
                    setSelectedItem(null)
                  }}
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add Full (₹{selectedItem.price})
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-coffee text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Order?</h2>
          <p className="text-xl mb-8 text-white/90 font-medium">
            {getCartItemCount() > 0 ? `You have ${getCartItemCount()} items in your cart. ` : ""}
            Visit us today or call ahead to place your order!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gold hover:bg-gold/90 text-coffee text-lg px-8 py-4 font-semibold">
              <a href="/visit">Visit Us</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-coffee text-lg px-8 py-4 bg-transparent font-semibold"
            >
              <a href="tel:+91XXXXXXXXX">Call to Order</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
