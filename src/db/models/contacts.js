import { model, Schema } from 'mongoose';

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber : {
      type: String,
      required: true,
    },
    email : {
      type: String
    },
    isFavourite: {
      type: Boolean,
      default: false
    },
    contactType : {
      type: String,
      default: "personal",
      enum: ['work', 'home', 'personal'],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Contact = model('Contact', contactsSchema);
