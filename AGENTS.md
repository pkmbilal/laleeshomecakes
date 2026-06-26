# AGENT.md — Premium Cake Business Website

## Project Goal
Build a premium, simple, responsive static website for a small cake business that sells cakes for birthdays, anniversaries, celebrations, and custom occasions. The site must feel elegant, sweet, modern, and trustworthy, with a visual direction inspired by the provided reference image: soft pink background, premium bakery branding, large hero cake image, clean navigation, rounded card-like layout, strong typography, and simple call-to-action buttons.

The final website must work without a backend. It should use client-side cart functionality and send the completed order to WhatsApp at checkout.

Brand name is "Lalees Home Cakes"

---

## Required Tech Stack
Use the following stack only:

- **Next.js** for the project structure, routing, and pages.
- **JavaScript only**. Do not use TypeScript. Do not create `.ts` or `.tsx` files.
- **Tailwind CSS** for all styling and responsive design.
- **HTML / semantic JSX markup** for page structure.
- **Client-side JavaScript** for cart, checkout form, localStorage, and WhatsApp order generation.
- **localStorage** for cart persistence.
- **Motion for React** for animation in the site.

### Important Technical Rules
- Use `.js` and `.jsx` files only.
- Do not use TypeScript.
- Do not add a backend, database, login system, admin panel, or API routes.
- Do not use heavy UI libraries unless absolutely necessary.
- Use Tailwind utility classes instead of separate large CSS files.
- Keep components reusable and easy to edit.
- Use static product data from a JavaScript file.
- Any component using cart state, `localStorage`, form handling, or WhatsApp checkout must be a client component using:

```js
"use client";
```

---

## Required Pages / Routes
Create these Next.js pages or equivalent routes:

1. **Home** — `/`
   - Premium hero section inspired by the attached UI.
   - Brand/logo area.
   - Navigation: Home, Cakes, About, Contact.
   - Main headline such as: `Fresh Cakes for Every Celebration`.
   - Short supporting text.
   - Primary CTA: `Order Now`.
   - Secondary CTA: `Explore Cakes`.
   - Featured cake image or hero cake visual.
   - Highlight badges such as `Birthday Cakes`, `Anniversary Cakes`, `Custom Orders`, `Freshly Made`.
   - Add a few featured cakes with `Add to Cart` buttons.

2. **About** — `/about`
   - Story of the cake business.
   - Emphasize freshness, handmade cakes, custom designs, quality ingredients, and celebration-focused service.
   - Include simple premium layout with image/card sections.

3. **Cakes** — `/cakes`
   - Product listing/grid.
   - Each cake card should include:
     - Cake image
     - Cake name
     - Short description
     - Price
     - Occasion/category
     - `Add to Cart` button
   - Include category filters if possible:
     - Birthday
     - Anniversary
     - Custom
     - Cupcakes / Desserts
   - Include cart icon with item count in the header.

4. **Contact** — `/contact`
   - Business contact details.
   - WhatsApp button.
   - Optional contact form UI, but it does not need backend submission.
   - Show business location/address as placeholder content if real content is not provided.
   - Include social links placeholders.

5. **Cart / Checkout** — `/cart`
   - Show all cart items.
   - Allow quantity increase/decrease.
   - Allow item removal.
   - Show subtotal and total.
   - Checkout form must collect:
     - Customer name: required
     - Phone number: optional
     - Delivery address: optional
     - Notes/message: optional
   - On checkout, generate a WhatsApp message with the full order details and open WhatsApp.

---

## Suggested Next.js File Structure
Use a clean Next.js structure with JavaScript files only.

```text
cake-website/
  app/
    globals.css
    layout.js
    page.js
    about/
      page.js
    cakes/
      page.js
    contact/
      page.js
    cart/
      page.js
  components/
    Header.js
    Footer.js
    Hero.js
    CakeCard.js
    ProductGrid.js
    CategoryFilter.js
    CartDrawer.js
    CartItem.js
    CheckoutForm.js
    SectionHeading.js
  data/
    products.js
    siteConfig.js
  lib/
    cart.js
    whatsapp.js
  public/
    images/
      hero-cake.jpg
      cake-1.jpg
      cake-2.jpg
      cake-3.jpg
      cake-4.jpg
      logo.png
  next.config.js
  package.json
  postcss.config.js
  tailwind.config.js
  README.md
```

---

## Tailwind CSS Setup Requirements
Install and configure Tailwind CSS for Next.js.

Use Tailwind classes for:
- Layouts
- Cards
- Buttons
- Typography
- Spacing
- Shadows
- Responsive behavior
- Form styling

The global CSS file should only contain Tailwind imports and minimal global variables/base styles.

Example `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --pink: #ec1b72;
  --pink-dark: #c9145d;
  --soft-pink: #fff1f7;
  --cream: #fff8f0;
  --text: #1e1e1e;
  --muted: #6f6f6f;
  --white: #ffffff;
  --border: #f5c8dc;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #fff1f7;
  color: #1e1e1e;
}
```

---

## Cart and WhatsApp Checkout Requirements
Use only client-side JavaScript. No backend is required.

### Cart Behavior
- Store cart items in `localStorage` so the cart remains after page reload.
- Header cart count should update immediately when items are added/removed.
- If the cart is empty, show a friendly empty state and a button back to the Cakes page.
- Prevent invalid quantities.
- Add to cart should work from the Cakes page and featured products on the Home page.
- Quantity controls should work on the Cart page.
- Cart count should sync across pages.

### WhatsApp Checkout
When the customer clicks `Send Order on WhatsApp`, create a WhatsApp URL like:

```js
const businessWhatsAppNumber = "966XXXXXXXXX"; // Replace with real business WhatsApp number, no +, no spaces
const whatsappUrl = `https://wa.me/${businessWhatsAppNumber}?text=${encodeURIComponent(message)}`;
window.open(whatsappUrl, "_blank");
```

The WhatsApp message should include:

```text
Hello, I would like to place a cake order.

Customer Details:
Name: [customer name]
Phone: [optional phone]
Address: [optional address]
Notes: [optional notes]

Order Items:
1. [Cake Name] x [Qty] — [Price]
2. [Cake Name] x [Qty] — [Price]

Total: [Total Price]
```

If phone/address/notes are empty, either omit them or display `Not provided`.

After checkout, clear the cart only after the WhatsApp link opens or after showing a confirmation message.

---

## Product Data Example
Create sample product data that can be easily edited later.

Use `data/products.js`:

```js
export const products = [
  {
    id: "birthday-strawberry-cake",
    name: "Strawberry Birthday Cake",
    category: "Birthday",
    price: 1500,
    currency: "INR",
    image: "/images/cake-1.jpg",
    description: "Soft vanilla sponge layered with fresh cream and strawberries."
  },
  {
    id: "anniversary-chocolate-cake",
    name: "Chocolate Anniversary Cake",
    category: "Anniversary",
    price: 850,
    currency: "INR",
    image: "/images/cake-2.jpg",
    description: "Rich chocolate cake with smooth ganache and elegant decoration."
  },
  {
    id: "custom-theme-cake",
    name: "Custom Theme Cake",
    category: "Custom",
    price: 1250,
    currency: "INR",
    image: "/images/cake-3.jpg",
    description: "Personalized cake design for special celebrations."
  }
];
```

Prices and currency should be easy to change.

---

## Site Configuration Example
Create `data/siteConfig.js` for business details.

```js
export const siteConfig = {
  businessName: "Cake Bakery",
  tagline: "Fresh cakes for every celebration",
  whatsappNumber: "966XXXXXXXXX",
  phone: "+966 XX XXX XXXX",
  email: "hello@example.com",
  address: "India",
  instagram: "#",
  facebook: "#"
};
```

---

## Design Direction
Use the attached reference image as the main UI inspiration, but do not copy it exactly. The site should look original, premium, and simple.

### Visual Style
- Background: soft pink, blush, cream, and white tones.
- Accent color: bright bakery pink / raspberry pink.
- Use rounded containers, cards, and buttons.
- Use soft shadows, lots of whitespace, and clean spacing.
- Add small decorative cake/strawberry/floral shapes only if they do not make the UI messy.
- Overall feeling: premium, elegant, modern bakery.

### Suggested Color Palette
```js
const colors = {
  pink: "#ec1b72",
  pinkDark: "#c9145d",
  softPink: "#fff1f7",
  cream: "#fff8f0",
  text: "#1e1e1e",
  muted: "#6f6f6f",
  white: "#ffffff",
  border: "#f5c8dc"
};
```

### Typography
Use a clean premium font pairing. Recommended:
- Headings: `Playfair Display`, `Cormorant Garamond`, or similar elegant serif.
- Body/navigation/buttons: `Poppins`, `Inter`, or similar modern sans-serif.

Fonts may be loaded with `next/font/google` or normal Google Fonts imports.

### Layout Requirements
- Fully responsive for mobile, tablet, and desktop.
- Header should be sticky or clearly visible.
- Mobile navigation should collapse into a menu.
- Hero section should look strong on desktop and stacked on mobile.
- Product cards should be clean and consistent.
- Checkout should be simple and easy to use.
- Use a premium card-like page container similar to the reference image.

---

## Component Requirements
Create reusable components where practical.

### Header
- Logo/business name on the left.
- Navigation links.
- Cart icon with item count.
- Mobile menu.
- Sticky or fixed behavior is acceptable.

### Hero
- Large premium headline.
- Supporting text.
- Two CTA buttons.
- Large cake image.
- Decorative accents inspired by bakery/strawberry/floral visuals.

### CakeCard
- Image, name, category, price, description.
- Add to Cart button.
- Button should update localStorage and header cart count.

### CheckoutForm
- Required name field.
- Optional phone, address, and notes.
- Validation for name.
- Generate WhatsApp order message.

---

## Functional Requirements
- Add to cart from the Cakes page and featured products on the Home page.
- Quantity controls in cart.
- Remove item from cart.
- Clear cart after successful WhatsApp checkout only after the WhatsApp link is opened or after showing confirmation.
- Cart count should sync across pages.
- Use semantic HTML through JSX.
- Use accessible labels for buttons, forms, and navigation.
- Use alt text for all images.
- Keep JavaScript modular and easy to edit.
- Avoid heavy libraries unless necessary.

---

## SEO and Metadata
Each page should include:
- Meaningful metadata title.
- Meta description.
- Clean heading structure.
- Open Graph tags if possible.

Suggested site title:
`Premium Cakes for Birthdays & Anniversaries`

With Next.js App Router, metadata can be added through `metadata` exports in page/layout files where appropriate.

---

## Static Export / Hosting Requirements
The project should be deployable as a static website.

Recommended hosting:
- Vercel
- Netlify
- GitHub Pages
- cPanel static hosting after export
- Any static hosting provider that supports exported files

For static export, use `next.config.js`:

```js
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
```

Avoid Next.js server-only features so the website remains fully static.

---

## Content Guidelines
Use polished, premium wording. Avoid generic placeholder text in the final version where possible.

Example tone:
- `Handcrafted cakes made fresh for your sweetest moments.`
- `Elegant birthday, anniversary, and custom cakes prepared with care.`
- `Choose your cake, add it to cart, and send your order directly on WhatsApp.`

---

## Important Placeholders to Replace
Before final delivery, ask the site owner for:
- Business name
- Logo
- WhatsApp number
- Cake images
- Product names and prices
- Business location
- Instagram/Facebook links
- Delivery areas
- Payment method details, if needed

Use temporary placeholder content only when real content is unavailable.

---

## Acceptance Criteria
The website is complete when:
- Home, About, Cakes, Contact, and Cart/Checkout pages are working.
- The project uses Next.js, Tailwind CSS, semantic HTML/JSX, and JavaScript only.
- No TypeScript files are present.
- UI visually matches the premium pink bakery style of the reference image.
- Customers can add cakes to cart.
- Cart persists with `localStorage`.
- Checkout collects required/optional details.
- WhatsApp opens with a properly formatted order message.
- Website is responsive on mobile, tablet, and desktop.
- Code is clean, organized, and easy for another developer to edit.
