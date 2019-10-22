export default [
  {
    id: 'DEV738089',
    title: 'Robot1',
    description:
      'To clean warehouse.',
    imageUrl: '/images/logos/logo.jpg',
    totalDownloads: '594',
    price: '10',
    status: 'published',
    createdAt: '27/03/2019'
  },
  {
    id: 'DEV795381',
    title: 'Robot2',
    description:
      'To stack products.',
    imageUrl: '/images/logos/logo.jpg',
    totalDownloads: '625',
    price: '27',
    status: 'archived',
    createdAt: '31/03/2019'
  },
  {
    id: 'DEV774585',
    title: 'Robot3',
    description:
      'To greet customers.',
    imageUrl: '/images/logos/logo.jpg',
    totalDownloads: '857',
    price: '20',
    status: 'published',
    createdAt: '03/04/2019'
  }
];

{/*
  const mongoose = require("mongoose");
  const { ObjectId } = mongoose.Schema;

  const productSchema = new mongoose.Schema(
      {
          name: {
              type: String,
              trim: true,
              required: true,
              maxlength: 32
          },
          description: {
              type: String,
              required: true,
              maxlength: 2000
          },
          price: {
              type: Number,
              trim: true,
              required: true,
              maxlength: 32
          },
          category: {
              type: ObjectId,
              ref: "Category",
              required: true
          },
          quantity: {
              type: Number
          },
          sold: {
              type: Number,
              default: 0
          },
          photo: {
              data: Buffer,
              contentType: String
          },
          shipping: {
              required: false,
              type: Boolean
          }
      },
      { timestamps: true }
  );

  module.exports = mongoose.model("Product", productSchema);


*/}
