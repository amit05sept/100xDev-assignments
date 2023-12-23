const z = require("zod");

// for
const emailSchema = z.string().email();

const s1 = `amitkumar@gmail.com`;
const response = emailSchema.safeParse(s1);
if (!response.success) {
  console.log("NOT a valid email");
} else {
  console.log("valid email");
}

// pasword validate
const passSchema = z.string().min(8);

const pass = "2glad000";
const response2 = passSchema.safeParse(pass);
if (!response2.success) {
  console.log("not a valid password");
} else {
  console.log("valid password");
}

// object validaton
const objectSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  country: z.literal("IN").or(z.literal("US")),
});

const obj = {
  email: `amit@123.com`,
  password: `2ami0`,
  country: `IN`,
};

const response3 = objectSchema.safeParse(obj);
if (!response3.success) {
  console.log(`not a valid object `);
} else {
  console.log(`valid object`);
}
