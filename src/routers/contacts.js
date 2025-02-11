import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
  upsertContactController,
} from '../controllers/contacts.js';

import { isValidId } from '../middlewares/isValidId.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));
router.get(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(getContactByIdController),
);
router.post('/contacts', ctrlWrapper(createContactController));
router.delete(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController),
);
router.put(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(upsertContactController),
);
router.patch(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(patchContactController),
);

export default router;
