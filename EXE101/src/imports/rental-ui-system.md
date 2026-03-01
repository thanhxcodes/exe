Design a complete high-fidelity UI system for a modern Rental E-commerce Web Application called “Rental Management System”.

The system must feel premium, clean, modern, and professional while remaining friendly and easy to use.

-------------------------------------------------------
🎨 VISUAL STYLE & BRANDING
-------------------------------------------------------

Add subtle micro-interactions and hover animations.
Use elegant typography hierarchy.
Spacing system should feel breathable and premium.
Keep UI consistent and brand-focused.

Style Requirements:
- Clean, modern, minimal UI
- Soft shadows
- Rounded 12px–16px corners
- Card-based layout
- Generous white space
- Professional but friendly tone
- Desktop-first responsive design
- Tablet and mobile adaptive layouts

Color System:
- Background: Light Gray #F5F6F8
- Primary: Deep Blue #2563EB (CTA, active states, highlights)
- Accent: Soft Orange #F59E0B (secondary highlight, badges)
- Success: Green #10B981
- Danger: Red #EF4444
- Neutral text: Dark Gray / Near Black
- Borders: subtle gray lines

Typography:
- Clean sans-serif style (Inter / SF Pro inspired)
- Clear hierarchy:
  H1 bold large
  H2 semi-bold
  Body regular
  Small helper text light
- Balanced spacing system (8px grid)
- Large readable buttons

UI Feel:
- Premium SaaS-level polish
- Elegant dashboards with charts
- Smooth hover transitions
- Button press states
- Card hover elevation effect
- Subtle loading skeleton states

-------------------------------------------------------
🏗 SYSTEM STRUCTURE
-------------------------------------------------------

The system has 4 roles:
- Customer
- Vendor (Shop)
- Deliver (Shipper)
- Admin

Each role must have:
- Dedicated dashboard
- Sidebar navigation
- Role-based layout
- Clear access separation

-------------------------------------------------------
1️⃣ CUSTOMER SCREENS
-------------------------------------------------------

Public Pages:
- Homepage with hero banner, featured rentals, categories, promotions
- Product listing page with filter sidebar (size, price, rating, availability)
- Search result page
- Product detail page:
   - Image gallery
   - Size guide modal
   - Availability calendar
   - Rental duration selector
   - Deposit info
- Login page
- Register page
- Forgot password page

Customer Dashboard:
- Dashboard overview (recent rentals, notifications, quick stats)
- Profile management (edit info, change password, addresses)
- Rental cart page
- Checkout page (shipping form, voucher input, payment summary)
- Payment success page
- My orders page (status filter)
- Order detail page with timeline tracking UI
- Extend rental page
- Return request page
- Rental history page
- Deposit refund tracking page
- Review & rating modal

-------------------------------------------------------
2️⃣ VENDOR (SHOP) SCREENS
-------------------------------------------------------

Vendor Dashboard:
- Summary cards:
   - Total Revenue
   - Active Rentals
- Pending Orders
   - Low Stock Alerts
- Revenue analytics chart (monthly)

Product Management:
- Product list table
- Add product form:
   - Image upload
   - Size variants
   - Rental price per day
   - Deposit amount
- Edit product page
- Inventory management page

Order Management:
- Orders waiting confirmation
- Confirmed orders
- In delivery
- Currently renting
- Returning
- Completed

Operational Pages:
- Order detail page with action buttons:
   Confirm / Reject / Assign Deliver
- Product condition check page:
   - Damage notes
   - Upload evidence images
- Late fee calculation modal
- Deposit refund confirmation modal

Financial:
- Transaction list
- Payout tracking
- Revenue report page with filters

-------------------------------------------------------
3️⃣ DELIVER (SHIPPER) SCREENS
-------------------------------------------------------

Mobile-first design priority.

- Deliver Dashboard:
   - Today deliveries
   - Today pickups
- Assigned orders list
- Delivery detail page:
   - Customer info
   - Map preview
   - Call button
- Status update buttons:
   - On the way
   - Delivered
- Pickup orders list
- Pickup confirmation page
- Delivery history page

UI must be:
- Minimal
- Large touch-friendly buttons
- Clear status indicators

-------------------------------------------------------
4️⃣ ADMIN SCREENS
-------------------------------------------------------

Admin Dashboard:
- System metrics:
   - Users
   - Vendors
   - Orders
   - Revenue
- Line and bar charts
- Recent activity feed

User Management:
- Customer list
- Vendor list
- Deliver list
- Account detail page
- Lock / Unlock account modal

Vendor Approval:
- Pending vendor applications
- Approve / Reject modal with reason input

Category Management:
- Category CRUD interface

Voucher Management:
- Create voucher form
- Usage tracking table

Financial Management:
- Transaction monitoring
- Refund management page

Complaint Handling:
- Complaint list
- Case detail page
- Conversation panel UI
- Resolution action buttons

System Reports:
- Revenue analytics
- Rental performance
- Damage rate dashboard

-------------------------------------------------------
🧩 GLOBAL COMPONENT LIBRARY
-------------------------------------------------------

Generate reusable design system components:
- Primary button
- Secondary button
- Outline button
- Icon button
- Form inputs
- Dropdowns
- Date picker
- Status badges (Pending, Confirmed, Renting, Returning, Completed)
- Timeline tracking component
- Modal dialog
- Confirmation dialog
- Toast notifications
- Data tables with pagination
- Empty states
- Loading skeleton
- Notification dropdown
- Sidebar navigation
- Top navigation bar

-------------------------------------------------------
📱 RESPONSIVE REQUIREMENTS
-------------------------------------------------------

Generate:
- Full desktop layouts for all screens
- Mobile responsive versions for:
   - Homepage
   - Product detail page
   - Customer dashboard
- Deliver dashboard

-------------------------------------------------------
📊 DATA & STATES
-------------------------------------------------------

Use realistic placeholder data.
Include:
- Hover states
- Active states
- Disabled states
- Error form validation states
- Success feedback states
- Empty state designs

Ensure the UI system looks consistent, scalable, and production-ready.
The final result should resemble a polished enterprise SaaS product.