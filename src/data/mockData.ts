import { Product, ProductCategory, ProductCondition, User } from '../types';

import heroImg from '../assets/images/campus_marketplace_hero_1791202951343.jpg';
import textbooksImg from '../assets/images/product_engineering_textbooks_1791202965529.jpg';
import calculatorImg from '../assets/images/product_scientific_calculator_1791202978096.jpg';
import laptopStandImg from '../assets/images/product_laptop_stand_1791202988980.jpg';
import studyDeskImg from '../assets/images/product_wood_study_desk_1791201597829.jpg';
import chairImg from '../assets/images/product_ergonomic_mesh_chair_1791201610356.jpg';
import sofaImg from '../assets/images/product_compact_sleeper_sofa_1791201628158.jpg';
import nightstandImg from '../assets/images/product_nightstand_lamp_1791202281078.jpg';
import beanbagImg from '../assets/images/product_beanbag_chair_1791202302580.jpg';
import shoeRackImg from '../assets/images/product_shoe_rack_bench_1791202333607.jpg';

export const ASSET_IMAGES = {
  hero: heroImg,
  textbooks: textbooksImg,
  calculator: calculatorImg,
  laptopStand: laptopStandImg,
  studyDesk: studyDeskImg,
  chair: chairImg,
  sofa: sofaImg,
  nightstand: nightstandImg,
  beanbag: beanbagImg,
  shoeRack: shoeRackImg,
};

export const PRODUCT_CATEGORIES: { name: ProductCategory; icon: string; count: number; description: string }[] = [
  { name: 'Books & Study Materials', icon: 'BookOpen', count: 48, description: 'Engineering, Calculus, Medical, CS & Humanities notes' },
  { name: 'Electronics', icon: 'Laptop', count: 52, description: 'Calculators, laptop stands, chargers, noise-cancelling tech' },
  { name: 'Hostel Essentials', icon: 'Home', count: 44, description: 'Mattresses, laundry hampers, organizers, bedside lamps' },
  { name: 'Fashion', icon: 'Shirt', count: 38, description: 'College hoodies, backpacks, winter jackets, formalwear' },
  { name: 'Furniture', icon: 'Armchair', count: 42, description: 'Study tables, ergonomic chairs, bed frames, storage racks' },
  { name: 'Sports', icon: 'Trophy', count: 34, description: 'Badminton rackets, gym dumbbells, yoga mats, skateboards' },
  { name: 'Stationery', icon: 'PenTool', count: 32, description: 'Drafting pens, lab coats, sticky notes, engineering kits' },
  { name: 'Lab & Medical Gear', icon: 'Stethoscope', count: 36, description: 'Stethoscopes, 100% cotton lab coats, dissection tools, goggles' },
  { name: 'Bikes & Mobility', icon: 'Bike', count: 30, description: 'Campus commuter bikes, electric scooters, U-locks, helmets' },
  { name: 'Musical Instruments', icon: 'Music', count: 28, description: 'Acoustic guitars, keyboards, concert ukuleles, tuners' },
  { name: 'Gaming & Consoles', icon: 'Gamepad2', count: 32, description: 'Controllers, Nintendo Switch games, gaming headsets' },
  { name: 'Kitchen & Dorm Cooking', icon: 'UtensilsCrossed', count: 40, description: 'Mini fridges, air fryers, personal blenders, kettles' },
  { name: 'Art & Architecture', icon: 'Palette', count: 30, description: 'Studio easels, canvas packs, acrylic paint sets, drafting boards' },
  { name: 'Other', icon: 'Package', count: 34, description: 'Cycle locks, mini heaters, room decor, dorm fairy lights' },
];

export const POPULAR_COLLEGES = [
  'All Campuses',
  'State Tech University',
  'Metro Science & Engineering College',
  'City Central University',
  'Northside Institute of Technology',
  'West Campus Medical & Arts College',
];

export const INITIAL_USERS: User[] = [
  {
    id: 'user-1',
    name: 'Alex Rivera',
    email: 'alex.rivera@statetech.edu',
    college: 'State Tech University',
    location: 'North Hall Dorm, Block B',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    joinedDate: 'September 2026',
    phone: '+1 (555) 234-5678',
    bio: 'Senior Electrical Engineering student. Selling course gear and dorm supplies as I prepare to graduate!',
  },
  {
    id: 'user-2',
    name: 'Priya Sharma',
    email: 'priya.sharma@metroeng.edu',
    college: 'Metro Science & Engineering College',
    location: 'Hostel 4, Room 218',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    joinedDate: 'August 2026',
    phone: '+1 (555) 876-5432',
    bio: 'Sophomore CS major. Always looking to trade textbooks, study electronics, and room organizers.',
  },
  {
    id: 'user-3',
    name: 'Marcus Williams',
    email: 'm.williams@citycentral.edu',
    college: 'City Central University',
    location: 'Pine Ridge Student Flats',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    joinedDate: 'October 2026',
    phone: '+1 (555) 345-6789',
    bio: 'Junior Pre-Med student and campus sports enthusiast. Moving apartments next month.',
  },
  {
    id: 'user-4',
    name: 'Emily Chen',
    email: 'emily.chen@northside.edu',
    college: 'Northside Institute of Technology',
    location: 'West Quad Suites',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    joinedDate: 'September 2026',
    phone: '+1 (555) 456-7890',
    bio: 'Mechanical Engineering junior. Selling lab tools, electronics, and dorm storage.',
  },
  {
    id: 'user-5',
    name: 'David Kim',
    email: 'david.kim@westcampus.edu',
    college: 'West Campus Medical & Arts College',
    location: 'BioMed Tower Dorms',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    joinedDate: 'August 2026',
    phone: '+1 (555) 567-8901',
    bio: 'Second-year medical student. Downsizing textbooks, clinical supplies, and hostel essentials.',
  },
];

// Helper database of authentic categories and items template to synthesize 520+ rich items deterministically
interface CategoryTemplate {
  category: ProductCategory;
  items: {
    title: string;
    price: number;
    originalPrice: number;
    description: string;
    image: string;
  }[];
}

const CATEGORY_TEMPLATES: CategoryTemplate[] = [
  {
    category: 'Books & Study Materials',
    items: [
      { title: 'Calculus: Early Transcendentals (Stewart 9th Edition)', price: 35, originalPrice: 120, description: 'Calculus textbook with clean handwritten formula sheets. Crisp pages with zero highlighting. Essential for First & Second year STEM majors.', image: textbooksImg },
      { title: 'Campbell Biology (12th Edition) + Lab Manual', price: 42, originalPrice: 145, description: 'Required for General Biology. Includes spiral-bound lab manual. Clean binding and covers.', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80' },
      { title: 'Organic Chemistry by David Klein (4th Edition) + Solutions', price: 38, originalPrice: 130, description: 'The essential textbook for passing Orgo! Includes the full student study guide and solutions manual.', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80' },
      { title: 'Discrete Mathematics and Its Applications (Rosen 8th Edition)', price: 28, originalPrice: 95, description: 'Core textbook for Computer Science and Math majors. Covers proof techniques, graph theory, and logic.', image: textbooksImg },
      { title: 'Principles of Microeconomics (Mankiw 9th Edition)', price: 24, originalPrice: 85, description: 'Introductory Economics textbook. Very gently used for a single 10-week summer semester.', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80' },
      { title: 'MCAT Complete 7-Book Subject Review Boxed Set (Kaplan)', price: 65, originalPrice: 220, description: 'Complete 7-volume prep set: Biochemistry, Biology, Organic Chem, Physics, and CARS.', image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80' },
      { title: 'Python Crash Course (2nd Edition, Matthes)', price: 18, originalPrice: 45, description: 'Hands-on project-based introduction to programming. Covers Django, Pygame, and data analysis.', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80' },
      { title: 'Introduction to Algorithms (CLRS 3rd Edition)', price: 48, originalPrice: 110, description: 'The famous algorithms bible for CS students preparing for technical interviews and coursework.', image: textbooksImg },
      { title: 'Fundamentals of Physics (Halliday & Resnick 10th Ed)', price: 36, originalPrice: 115, description: 'Complete calculus-based university physics textbook with practice questions and mechanics solutions.', image: 'https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=600&q=80' },
      { title: 'Gray’s Anatomy for Students (4th Edition)', price: 55, originalPrice: 160, description: 'Essential clinical anatomy reference with vivid medical illustrations. Clean binding, zero water damage.', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  {
    category: 'Electronics',
    items: [
      { title: 'Texas Instruments TI-84 Plus Graphing Calculator', price: 45, originalPrice: 115, description: 'Fully functioning TI-84 Plus graphing calculator with slide case and fresh AAA batteries installed.', image: calculatorImg },
      { title: 'Ergonomic Aluminum Portable Laptop Riser Stand', price: 18, originalPrice: 42, description: 'Foldable anodized silver aluminum laptop elevator with non-slip silicone pads and ventilated design.', image: laptopStandImg },
      { title: 'Anker 20,000mAh Power Bank (USB-C Fast Charging)', price: 24, originalPrice: 55, description: 'Ultra-high capacity external battery. Charges a phone 4.5 times or iPad 2 times during all-day classes.', image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80' },
      { title: 'Sony Active Noise-Cancelling Wireless Bluetooth Headphones', price: 50, originalPrice: 140, description: 'Over-ear headphones with superior active noise cancellation. Blocks out loud dorm mates and hallway chatter.', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80' },
      { title: 'Logitech Wireless Silent Click Ergonomic Mouse (M590)', price: 16, originalPrice: 38, description: 'Virtually silent click buttons so you can study in quiet campus libraries without clicking noise.', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80' },
      { title: '24-Inch IPS Full HD 1080p Dorm Study Monitor (HDMI/VGA)', price: 60, originalPrice: 150, description: 'Crisp IPS panel with ultra-thin bezels. Perfect second screen for coding, Zoom lectures, or video editing.', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80' },
      { title: '65W USB-C GaN 3-Port Wall Fast Charger', price: 20, originalPrice: 48, description: 'Powers MacBook, iPad, and iPhone simultaneously from a single dorm wall socket. Foldable prongs.', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80' },
      { title: 'Blue Yeti USB Condenser Microphone for Class Presentations', price: 48, originalPrice: 120, description: 'Broadcast-quality audio for remote classes, podcasts, and student group presentations with desktop stand.', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80' },
      { title: 'Apple Magic Keyboard 2 with Lightning Cable', price: 42, originalPrice: 99, description: 'Sleek wireless rechargeable Bluetooth keyboard with low-profile scissor mechanism keys.', image: laptopStandImg },
      { title: 'JBL Clip 4 Portable Waterproof Bluetooth Speaker', price: 25, originalPrice: 60, description: 'Rugged portable clip-on speaker with rich bass. Perfect for campus quad hangouts and park picnics.', image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  {
    category: 'Hostel Essentials',
    items: [
      { title: '3-Inch Cooling Gel Memory Foam Hostel Mattress Topper (Twin XL)', price: 32, originalPrice: 85, description: 'Makes hard hostel bunk beds feel like luxury hotel beds! Pressure-relieving ventilated gel memory foam with clean cover.', image: sofaImg },
      { title: 'Scandinavian 2-Drawer Nightstand Table + Warm LED Study Lamp', price: 30, originalPrice: 90, description: 'Light oak bedside cabinet with 2 pull-out storage drawers bundled with a minimalist warm reading desk lamp.', image: nightstandImg },
      { title: 'Natural 3-Tier Bamboo Shoe Rack & Entryway Bench', price: 22, originalPrice: 65, description: 'Sturdy bamboo organizer holding up to 8 pairs of shoes. Supports sitting while putting on sneakers.', image: shoeRackImg },
      { title: '1.7L Stainless Steel Electric Water Kettle (Auto Shut-Off)', price: 15, originalPrice: 38, description: 'Fast boiling (3 minutes) for hostel instant noodles, tea, and pour-over coffee. Food-grade steel.', image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?auto=format&fit=crop&w=600&q=80' },
      { title: 'Heavy-Duty 3-Compartment Rolling Laundry Hamper Cart', price: 24, originalPrice: 60, description: 'Steel frame on wheels. Keeps darks, lights, and towels pre-sorted so hostel laundry day is effortless.', image: shoeRackImg },
      { title: 'Twin XL Washed Microfiber 4-Piece Dorm Bed Sheet Set', price: 16, originalPrice: 42, description: 'Includes fitted sheet, flat sheet, and 2 pillowcases in heather slate grey. Soft, breathable, sanitized.', image: sofaImg },
      { title: 'Compact 1500W Ceramic Dorm Space Heater (Tip-Over Safety)', price: 22, originalPrice: 50, description: 'Fast 2-second heating for chilly winter dorm rooms. Includes thermostat and automatic tip-over shut-off.', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80' },
      { title: 'Over-The-Door 6-Hook Coat & Backpack Hanging Rack', price: 9, originalPrice: 22, description: 'No drilling required. Fits standard dorm room doors to hold heavy winter coats, towels, and bags.', image: shoeRackImg },
      { title: 'Foldable Mesh Pop-Up Laundry Hamper with Carry Handles', price: 8, originalPrice: 18, description: 'Breathable lightweight wire frame hamper that twists flat into a small circle when not in use.', image: nightstandImg },
      { title: 'Clamp-On Flexible Gooseneck LED Bedside Reading Light', price: 12, originalPrice: 28, description: 'Clamps securely onto hostel bed frames. 3 color temperatures with touch dimming control.', image: nightstandImg },
    ],
  },
  {
    category: 'Fashion',
    items: [
      { title: 'Waterproof Laptop Backpack with USB Charging Port', price: 20, originalPrice: 55, description: 'Grey water-resistant anti-theft student daypack with padded sleeve fitting up to 15.6" laptops.', image: textbooksImg },
      { title: 'Oversized Heavyweight University Crest Fleece Hoodie (Size L)', price: 25, originalPrice: 68, description: 'Super cozy dark forest green varsity collegiate hoodie with embroidered campus crest. Heavyweight cotton.', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80' },
      { title: 'The North Face Windproof & Water-Resistant Puffer Jacket (Size M)', price: 65, originalPrice: 190, description: 'Black insulated winter down jacket. Essential for surviving windy walks between campus science quads.', image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=80' },
      { title: 'Classic Herschel Supply Co. Canvas Laptop Backpack', price: 28, originalPrice: 70, description: 'Navy blue heritage backpack with signature striped fabric liner and 15-inch fleece laptop sleeve.', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80' },
      { title: 'Formal College Presentation Blazer & Tie Set (Navy, 38R)', price: 35, originalPrice: 110, description: 'Single-breasted modern slim-fit navy blazer worn twice for business case competitions. Dry-cleaned.', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80' },
      { title: 'Nike Club Fleece Jogger Pants (Heather Grey, Size M)', price: 20, originalPrice: 55, description: 'Comfortable tapered college sweatpants with ribbed cuffs. Great for campus gym or late-night studying.', image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=600&q=80' },
      { title: 'Patagonia Better Sweater 1/4 Zip Fleece Pullover (Size M)', price: 45, originalPrice: 119, description: 'Classic oatmeal heather fleece jacket with zippered stand-up collar. Soft brushed interior.', image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=600&q=80' },
      { title: 'Adidas Ultraboost Campus Walking Sneakers (Men 10.5)', price: 38, originalPrice: 180, description: 'Primeknit upper with responsive boost midsole cushioning for walking miles across sprawling campuses.', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  {
    category: 'Furniture',
    items: [
      { title: 'Solid Student Study Table with Dual Cable Pass-Throughs', price: 55, originalPrice: 160, description: 'Sturdy 48-inch natural light oak study desk with black metal hairpin legs. Fits dual monitors.', image: studyDeskImg },
      { title: 'Ergonomic High-Back Breathable Mesh Study Chair', price: 45, originalPrice: 135, description: 'High-density foam cushion with breathable mesh lumbar support, pneumatic height adjustment.', image: chairImg },
      { title: 'Plush Navy Blue Dorm Lounge Bean Bag Chair', price: 28, originalPrice: 75, description: 'Cozy virgin EPS bead lounge bean bag with durable double-stitched denim-feel canvas cover.', image: beanbagImg },
      { title: 'Foldable Compact Sleeper Sofa Bed (Teal Grey Linen)', price: 85, originalPrice: 240, description: '2-seater couch that easily clicks down flat into a twin sleeper when friends crash over.', image: sofaImg },
      { title: '4-Tier Birch Wood Bookcase & Stationery Organizer', price: 26, originalPrice: 70, description: 'Compact vertical shelving unit holding heavy textbooks, binders, and desk plants. Easy to lift.', image: studyDeskImg },
      { title: 'Minimalist Steel Twin Bed Frame with 14" Under-Bed Clearance', price: 45, originalPrice: 120, description: 'Heavy-duty black steel slats with zero squeaks. Provides 14 inches of clearance underneath for storage.', image: heroImg },
      { title: 'Full-Length Free-Standing Wood Mirror with Coat Hanging Bar', price: 30, originalPrice: 85, description: 'Solid birch dressing mirror with horizontal garment bar on back to hang tomorrow’s class outfit.', image: nightstandImg },
      { title: 'Adjustable Rolling Utility Cart with 3 Metal Mesh Baskets', price: 22, originalPrice: 48, description: 'Mobile pantry and toiletries cart on 360-degree lockable caster wheels. Fits beside dorm desks.', image: shoeRackImg },
    ],
  },
  {
    category: 'Sports',
    items: [
      { title: 'Yonex Carbon Graphite Badminton Rackets Kit (Set of 2 + Shuttlecocks)', price: 25, originalPrice: 70, description: 'Lightweight high-tension graphite badminton pair with original zippered padded carrying case.', image: laptopStandImg },
      { title: 'Wilson Evolution Indoor Official Size Basketball (Size 7)', price: 28, originalPrice: 75, description: 'The preferred ball for collegiate intramural basketball. Microfiber composite leather for superior grip.', image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?auto=format&fit=crop&w=600&q=80' },
      { title: 'Adjustable Cast Iron Dumbbells Set (20 lbs each with Connector)', price: 35, originalPrice: 90, description: 'Pair of compact dumbbells with screw-lock collars and padded connector bar for barbell exercises.', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80' },
      { title: 'Extra Thick 8mm Non-Slip Fitness & Yoga Mat with Strap', price: 14, originalPrice: 35, description: 'High-density eco-friendly TPE foam mat that provides joint cushioning on hard dorm floors.', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80' },
      { title: '31-Inch Maple Cruiser Skateboard (Smooth PU Wheels)', price: 32, originalPrice: 85, description: '7-ply Canadian maple deck with ABEC-9 high-speed bearings for cruising campus sidewalks.', image: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=600&q=80' },
      { title: 'Spalding Pro Slam Official Volleyball', price: 18, originalPrice: 40, description: 'Soft-touch machine-stitched composite cover designed for sand quad courts or indoor gym sessions.', image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=600&q=80' },
      { title: 'Insulated Stainless Steel 32oz Gym Shaker Bottle', price: 12, originalPrice: 28, description: 'Double-wall vacuum insulation keeps protein shakes ice cold for 24 hours. Leak-proof flip cap.', image: 'https://images.unsplash.com/photo-1577741314755-048d8525d31e?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  {
    category: 'Stationery',
    items: [
      { title: 'Rotring Technical Drawing & Engineering Drafting Pen Kit', price: 15, originalPrice: 48, description: 'Precision technical pens with waterproof black drawing ink cartridges, drafting compass, and stencils.', image: calculatorImg },
      { title: 'Five Star 5-Subject Spiral College-Ruled Notebooks (Pack of 3)', price: 12, originalPrice: 28, description: 'Unopened 3-pack of heavy-duty water-resistant spiral notebooks with movable dividers.', image: textbooksImg },
      { title: 'Pastel Aesthetic Dual-Tip Study Highlighters (12-Color Set)', price: 8, originalPrice: 20, description: 'Soft pastel shades that do not bleed through thin textbook pages. Chisel and fine bullet tips.', image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80' },
      { title: 'A3 Portable Wooden Drafting Drawing Board with Parallel Ruler', price: 25, originalPrice: 65, description: 'Smooth basswood surface with adjustable angle tilt stand and built-in metric sliding ruler.', image: studyDeskImg },
      { title: 'Muji Gel Ink Ballpoint Pens 0.5mm (Set of 10 Assorted Colors)', price: 10, originalPrice: 22, description: 'Smooth-writing Japanese gel ink pens. Never skips on exam booklets or lecture notes.', image: calculatorImg },
      { title: 'Graph Gear 1000 Premium Mechanical Pencil (0.5mm Metal Body)', price: 11, originalPrice: 24, description: 'Dual-action retractor with knurled metal grip for precision math and architecture drawing.', image: calculatorImg },
    ],
  },
  {
    category: 'Lab & Medical Gear',
    items: [
      { title: '3M Littmann Classic III Monitoring Stethoscope (Black Edition)', price: 65, originalPrice: 125, description: 'Stainless steel dual-sided chestpiece with tunable diaphragms. Essential for nursing, pre-med, and biology.', image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=600&q=80' },
      { title: 'Unisex 100% Breathable White Cotton Chemistry Lab Coat (Medium)', price: 16, originalPrice: 38, description: 'Knee-length heavy-duty cotton lab coat with snap buttons and 3 reinforced storage pockets.', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80' },
      { title: 'Biology Dissection Tools Kit (Stainless Steel Scalpel, Forceps, Case)', price: 14, originalPrice: 32, description: '12-piece medical-grade stainless steel dissection set in a zippered leatherette storage case.', image: 'https://images.unsplash.com/photo-1583912267550-d44d9c9b5840?auto=format&fit=crop&w=600&q=80' },
      { title: 'Anti-Fog Chemical Splash Impact Safety Goggles (ANSI Certified)', price: 8, originalPrice: 20, description: 'Soft elastomeric body with indirect ventilation to prevent fogging during organic chemistry labs.', image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80' },
      { title: 'Medical Neurological Diagnostic Reflex Hammer & Tuning Fork Set', price: 18, originalPrice: 42, description: 'Includes Taylor percussion hammer, C128/C512 tuning forks, and penlight for clinical physical exam prep.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80' },
      { title: 'Laboratory Micropipette 100-1000uL Adjustable Pipettor', price: 28, originalPrice: 65, description: 'Autoclavable pipettor calibrated according to ISO 8655. Great for molecular biology and biochemistry labs.', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  {
    category: 'Bikes & Mobility',
    items: [
      { title: 'Single-Speed Campus Commuter Bicycle (21" Frame, Deep Teal)', price: 75, originalPrice: 230, description: 'Lightweight steel frame commuter bike with front and rear caliper brakes. Fresh chain and puncture-resistant tires.', image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80' },
      { title: 'Segway Ninebot KickScooter (15.5 mph, Foldable Electric)', price: 120, originalPrice: 350, description: 'Electric scooter for cutting across sprawling college campuses. 15-mile battery range, LED headlight.', image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80' },
      { title: 'Kryptonite New York Heavy-Duty D-Lock with 3 Keys', price: 32, originalPrice: 85, description: '16mm hardened MAX-Performance steel shackle. Anti-theft protection for locking high-value campus bikes.', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80' },
      { title: 'Giro Fixture MIPS Bicycle Helmet (Matte Black, Universal Fit)', price: 22, originalPrice: 60, description: 'Equipped with MIPS safety liner for rotational impact protection. 18 cooling vents.', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80' },
      { title: '40-Inch Drop-Through Bamboo Campus Longboard Skateboard', price: 42, originalPrice: 110, description: 'Super smooth carve board with 70mm gummy wheels. Great for coasting downhill to morning 8 AM classes.', image: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=600&q=80' },
      { title: 'USB Rechargeable 800 Lumens Front & Rear Bike Light Set', price: 14, originalPrice: 35, description: 'Bright waterproof commuter headlight with flashing modes so cars and pedestrians see you on night rides.', image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  {
    category: 'Musical Instruments',
    items: [
      { title: 'Yamaha F310 Full-Size Acoustic Guitar with Padded Gig Bag', price: 70, originalPrice: 180, description: 'Spruce top with rosewood fretboard. Rich warm resonance. Includes fresh D’Addario strings, picks, and capo.', image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80' },
      { title: 'Casio 61-Key Portable Electronic Piano Keyboard (CT-S300)', price: 65, originalPrice: 160, description: 'Touch-sensitive piano keys with headphone jack so you can practice quietly in your dorm room without disturbance.', image: 'https://images.unsplash.com/photo-1520523839898-507127054976?auto=format&fit=crop&w=600&q=80' },
      { title: 'Kala Mahogany Concert Ukulele with Aquila Strings', price: 28, originalPrice: 75, description: 'Lush Hawaiian tone in a portable body that fits in your backpack. Tuned and comes with a padded travel bag.', image: 'https://images.unsplash.com/photo-1525994886773-080587e161c2?auto=format&fit=crop&w=600&q=80' },
      { title: 'Snark SN-5X Clip-On Chromatic Guitar & Bass Tuner', price: 9, originalPrice: 20, description: 'Full color 360-degree rotating display. Fast frequency detection for acoustic, electric, and violin.', image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80' },
      { title: 'Foldable Heavy-Duty Sheet Music Stand with Carrying Bag', price: 15, originalPrice: 35, description: 'Adjustable height and angle metal stand with page holding spring clips. Folds into compact 18" pouch.', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  {
    category: 'Gaming & Consoles',
    items: [
      { title: 'Sony PlayStation 5 DualSense Wireless Controller (Midnight Black)', price: 42, originalPrice: 75, description: 'Haptic feedback and adaptive triggers. Mint condition, zero stick drift, paired seamlessly over Bluetooth.', image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80' },
      { title: 'Xbox Wireless Controller (Carbon Black, Bluetooth/PC compatible)', price: 38, originalPrice: 65, description: 'Textured grip on triggers and bumpers. Works with Xbox Series X, PC, and iPad.', image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=600&q=80' },
      { title: 'Super Smash Bros. Ultimate (Nintendo Switch Cartridge)', price: 35, originalPrice: 60, description: 'The essential campus dorm party game! Original case included, cartridge tested and spotless.', image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=600&q=80' },
      { title: 'SteelSeries Arctis 1 Multi-Platform Wired Gaming Headset', price: 26, originalPrice: 50, description: 'Detachable ClearCast noise-cancelling microphone and steel-reinforced headband for PC, Switch, and PS5.', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80' },
      { title: 'Extended XXL RGB Gaming Mousepad (31.5" x 11.8")', price: 14, originalPrice: 32, description: 'Water-resistant micro-textured cloth with non-slip rubber base and 14 customizable glowing LED light modes.', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80' },
      { title: 'Mario Kart 8 Deluxe for Nintendo Switch', price: 34, originalPrice: 60, description: 'Fast multiplayer racing with all courses unlocked. Great for roommate tournaments in student lounges.', image: 'https://images.unsplash.com/photo-1612287271836-81cf69a2d04a?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  {
    category: 'Kitchen & Dorm Cooking',
    items: [
      { title: 'Compact 3.2 Cu. Ft. 2-Door Dorm Refrigerator with Freezer', price: 85, originalPrice: 220, description: 'Separate freezer compartment makes real ice cubes! Quiet compressor with interior LED lighting.', image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80' },
      { title: 'Ninja 4-in-1 Compact Dorm Air Fryer (4 Quart Capacity)', price: 45, originalPrice: 120, description: 'Crisps chicken tenders, fries, and reheats dining hall pizza to perfection with minimal oil. Dishwasher-safe basket.', image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80' },
      { title: 'Magic Bullet Personal Smoothie Blender (11-Piece Set)', price: 20, originalPrice: 45, description: 'Chops and blends protein shakes in 10 seconds flat. Cups include to-go lids for walking to class.', image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&q=80' },
      { title: 'Brita 6-Cup Metro Water Filter Pitcher with 2 Extra Filters', price: 14, originalPrice: 32, description: 'Removes chlorine taste and tap water odors. Fits easily in compact dorm room mini fridges.', image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80' },
      { title: '700W Countertop Microwave Oven (0.7 Cu. Ft.)', price: 35, originalPrice: 85, description: 'Compact footprint with rotating glass turntable and 6 auto-cook presets (popcorn, soup, defrost).', image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80' },
      { title: 'Hamilton Beach 2-Slice Extra-Wide Slot Toaster', price: 12, originalPrice: 28, description: 'Defrost, bagel, and cancel buttons. Slide-out crumb tray keeps dorm kitchenettes clean.', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  {
    category: 'Art & Architecture',
    items: [
      { title: 'Solid Beechwood Tabletop Studio Easel with Storage Drawer', price: 26, originalPrice: 65, description: 'Adjustable angle display easel holding canvases up to 24 inches. Built-in 3-compartment supply drawer.', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80' },
      { title: 'Liquitex Professional Heavy Body Acrylic Paint Set (12 Tubes)', price: 22, originalPrice: 55, description: 'Thick consistency with high pigment load for expressive brush strokes. Tubes are 90% full.', image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80' },
      { title: '100% Cotton Stretched Artist Canvas 5-Pack (11x14 inch)', price: 15, originalPrice: 35, description: 'Acid-free titanium gesso pre-primed canvases. Great for studio fine arts and painting assignments.', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80' },
      { title: 'Waterproof Nylon Art Portfolio Carrying Bag (24x36 inch)', price: 20, originalPrice: 50, description: 'Reinforced shoulder strap with zippered inner organizers for architectural blueprints and presentation boards.', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80' },
      { title: 'Self-Healing A2 Rotary Craft Cutting Mat + Scalpel Knife Set', price: 14, originalPrice: 32, description: 'Double-sided metric and inch grids. Protects study desks when building foam board architectural models.', image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  {
    category: 'Other',
    items: [
      { title: 'Heavy-Duty Kryptonite Bicycle U-Lock with 4ft Cable & 2 Keys', price: 24, originalPrice: 60, description: 'Hardened steel shackle resists bolt cutters and leverage attacks. 4-foot flex cable included.', image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80' },
      { title: 'Warm Ambient USB Fairy String Lights (33ft Copper Wire + Remote)', price: 9, originalPrice: 22, description: '100 warm white LEDs on flexible copper wire with 8 dimming modes and timer for cozy dorm walls.', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80' },
      { title: 'Surge Protector 6-Outlet Power Strip with 10ft Heavy Duty Cord', price: 14, originalPrice: 32, description: 'Crucial for older dorm rooms with only 1 or 2 wall outlets. 6 AC outlets + 2 USB charging ports.', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80' },
      { title: 'Ultrasonic Essential Oil Aromatherapy Diffuser with LED Light', price: 15, originalPrice: 35, description: '300ml whisper-quiet cool mist humidifier. Keeps dorm air fresh during exam stress weeks.', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80' },
      { title: 'Tri-Fold LED Lighted Vanity Makeup Mirror with 3X Magnification', price: 18, originalPrice: 45, description: 'Touch screen dimmable natural daylight LEDs. Dual power supply via USB or AAA batteries.', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80' },
      { title: 'Handheld Garment Steamer for Quick Class Presentation Clothes', price: 19, originalPrice: 42, description: 'Heats in 30 seconds to remove wrinkles from blazers, collared shirts, and interview dresses.', image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=600&q=80' },
    ],
  },
];

// Generate 520+ rich, deterministic, high-quality student marketplace products
function generate500PlusProducts(): Product[] {
  const result: Product[] = [];
  const conditions: ProductCondition[] = ['Like New', 'Gently Used', 'Well Loved', 'Fair'];
  const colleges = POPULAR_COLLEGES.filter((c) => c !== 'All Campuses');
  const dorms = [
    'North Hall Dorm, Block B',
    'Hostel 4, Room 218',
    'Pine Ridge Student Flats',
    'West Quad Suites, Apt 4B',
    'BioMed Tower Dorms',
    'South Campus Residence Hall',
    'University Commons Tower 2',
    'Engineering Quad Hall A',
  ];

  const distances = [
    '0.2 km away (2 min walk)',
    '0.3 km away (4 min walk)',
    '0.4 km away (5 min walk)',
    '0.5 km away (6 min walk)',
    '0.6 km away (7 min walk)',
    '0.8 km away (10 min walk)',
    '1.1 km away (North Quad)',
    '1.2 km away (Hostel Block)',
  ];

  // Specific highlighted products from prompt
  const promptFeaturedItems: Product[] = [
    {
      id: 'prod-1',
      title: 'Engineering Mathematics — Semester 2',
      category: 'Books & Study Materials',
      price: 350,
      originalPrice: 950,
      condition: 'Like New',
      description: 'Engineering Mathematics textbook with formulas and step-by-step solved question papers. Crisp unmarked pages. Essential for 1st/2nd year engineering students.',
      images: [textbooksImg, calculatorImg],
      college: 'State Tech University',
      location: 'North Hall Dorm, Block B',
      distance: '0.2 km away (2 min walk)',
      sellerId: 'user-1',
      sellerName: 'Alex Rivera',
      sellerAvatar: INITIAL_USERS[0].avatar,
      sellerRating: 4.9,
      sellerVerified: true,
      contactPreference: 'CampusCart Chat / Meet at Student Commons',
      createdAt: new Date().toISOString(),
      views: 184,
      featured: true,
      status: 'active',
    },
    {
      id: 'prod-2',
      title: 'Scientific Calculator',
      category: 'Electronics',
      price: 650,
      originalPrice: 1400,
      condition: 'Gently Used',
      description: 'Casio fx-991EX ClassWiz scientific calculator with 552 functions and solar panel. Perfect for university math, thermodynamics, and physics exams.',
      images: [calculatorImg, textbooksImg],
      college: 'Metro Science & Engineering College',
      location: 'Hostel 4, Room 218',
      distance: '0.3 km away (4 min walk)',
      sellerId: 'user-2',
      sellerName: 'Priya Sharma',
      sellerAvatar: INITIAL_USERS[1].avatar,
      sellerRating: 5.0,
      sellerVerified: true,
      contactPreference: 'CampusCart Chat or WhatsApp',
      createdAt: new Date(Date.now() - 3600000).toISOString(),
      views: 295,
      featured: true,
      status: 'active',
    },
    {
      id: 'prod-3',
      title: 'Study Table',
      category: 'Furniture',
      price: 1200,
      originalPrice: 3200,
      condition: 'Gently Used',
      description: 'Sturdy wooden study desk with dual cable pass-throughs and spacious surface. Fits laptop, monitor, and notebooks comfortably. Easily disassembled.',
      images: [studyDeskImg, laptopStandImg],
      college: 'City Central University',
      location: 'Pine Ridge Student Flats',
      distance: '0.5 km away (6 min walk)',
      sellerId: 'user-3',
      sellerName: 'Marcus Williams',
      sellerAvatar: INITIAL_USERS[2].avatar,
      sellerRating: 4.8,
      sellerVerified: true,
      contactPreference: 'Pickup from apartment ground floor',
      createdAt: new Date(Date.now() - 7200000).toISOString(),
      views: 310,
      featured: true,
      status: 'active',
    },
    {
      id: 'prod-4',
      title: 'Hostel Study Lamp',
      category: 'Hostel Essentials',
      price: 450,
      originalPrice: 1100,
      condition: 'Like New',
      description: 'Touch-control warm LED study desk lamp with 3 brightness modes and flexible neck. Includes USB cable. Eye-friendly flicker-free reading.',
      images: [nightstandImg, studyDeskImg],
      college: 'Northside Institute of Technology',
      location: 'West Quad Suites',
      distance: '0.4 km away (5 min walk)',
      sellerId: 'user-4',
      sellerName: 'Emily Chen',
      sellerAvatar: INITIAL_USERS[3].avatar,
      sellerRating: 4.7,
      sellerVerified: true,
      contactPreference: 'CampusCart Chat',
      createdAt: new Date(Date.now() - 14400000).toISOString(),
      views: 140,
      featured: true,
      status: 'active',
    },
    {
      id: 'prod-5',
      title: 'Mechanical Engineering Textbooks (Complete Set)',
      category: 'Books & Study Materials',
      price: 800,
      originalPrice: 2400,
      condition: 'Gently Used',
      description: 'Includes Thermodynamics by Cengel & Boles, Theory of Machines, and Strength of Materials. Complete with handwritten lecture notes.',
      images: [textbooksImg, laptopStandImg],
      college: 'State Tech University',
      location: 'Engineering Quad / North Hall',
      distance: '0.3 km away (3 min walk)',
      sellerId: 'user-1',
      sellerName: 'Alex Rivera',
      sellerAvatar: INITIAL_USERS[0].avatar,
      sellerRating: 4.9,
      sellerVerified: true,
      contactPreference: 'Meet outside Engineering Quad',
      createdAt: new Date(Date.now() - 28800000).toISOString(),
      views: 210,
      featured: true,
      status: 'active',
    },
    {
      id: 'prod-6',
      title: 'Waterproof College Backpack',
      category: 'Fashion',
      price: 500,
      originalPrice: 1600,
      condition: 'Like New',
      description: 'Padded laptop daypack with water-resistant fabric, USB charging port, hidden anti-theft pocket, and dual water bottle sleeves.',
      images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80', textbooksImg],
      college: 'West Campus Medical & Arts College',
      location: 'BioMed Tower Dorms',
      distance: '0.6 km away (7 min walk)',
      sellerId: 'user-5',
      sellerName: 'David Kim',
      sellerAvatar: INITIAL_USERS[4].avatar,
      sellerRating: 4.9,
      sellerVerified: true,
      contactPreference: 'CampusCart Chat',
      createdAt: new Date(Date.now() - 43200000).toISOString(),
      views: 165,
      featured: true,
      status: 'active',
    },
  ];

  result.push(...promptFeaturedItems);

  let idCounter = 7;

  // We loop through categories and template items, creating 520+ realistic variations
  // Each category has multiple items, multiplied by batches across colleges & dorms
  for (let batch = 0; batch < 6; batch++) {
    for (const catTemplate of CATEGORY_TEMPLATES) {
      for (let i = 0; i < catTemplate.items.length; i++) {
        const item = catTemplate.items[i];
        const user = INITIAL_USERS[(idCounter + batch) % INITIAL_USERS.length];
        const college = colleges[(idCounter + batch) % colleges.length];
        const location = dorms[(idCounter + i) % dorms.length];
        const distance = distances[(idCounter + i) % distances.length];
        const condition = conditions[(idCounter + i + batch) % conditions.length];

        // Convert template price to realistic INR value (approx 20x for student prices)
        const inrBasePrice = Math.round(item.price * 22 / 50) * 50;
        const priceOffset = batch === 0 ? 0 : (batch % 2 === 0 ? -50 : 50);
        const finalPrice = Math.max(150, inrBasePrice + priceOffset);
        const finalOriginal = Math.round((finalPrice * 2.4) / 50) * 50;

        // Variant prefix/suffix for later batches
        const variantSuffixes = [
          '',
          ' (Mint Condition)',
          ' (Campus Edition)',
          ' (Includes Extras)',
          ' (Quick Pickup Discount)',
          ' (Ready for Finals)',
        ];
        const title = batch === 0 ? item.title : `${item.title}${variantSuffixes[batch]}`;

        // Create timestamp from past 14 days
        const daysAgo = (idCounter % 14);
        const createdDate = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000 - (idCounter % 60) * 60000).toISOString();

        result.push({
          id: `prod-${idCounter}`,
          title,
          category: catTemplate.category,
          price: finalPrice,
          originalPrice: finalOriginal,
          condition,
          description: item.description,
          images: [item.image, textbooksImg],
          college,
          location,
          distance,
          sellerId: user.id,
          sellerName: user.name,
          sellerAvatar: user.avatar,
          sellerRating: Number((4.6 + ((idCounter * 7) % 5) / 10).toFixed(1)),
          sellerVerified: true,
          contactPreference: 'CampusCart Chat / Meet at Dorm Quad',
          createdAt: createdDate,
          views: 45 + ((idCounter * 17) % 350),
          featured: idCounter % 15 === 0,
          status: idCounter % 40 === 0 ? 'sold' : 'active',
        });

        idCounter++;
      }
    }
  }

  return result;
}

export const INITIAL_PRODUCTS: Product[] = generate500PlusProducts();
