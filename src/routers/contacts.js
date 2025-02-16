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

router.get('/', ctrlWrapper(getContactsController));
router.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(getContactByIdController),
);
router.post('/', ctrlWrapper(createContactController));
router.delete(
  '/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController),
);
router.put(
  '/:contactId',
  isValidId,
  ctrlWrapper(upsertContactController),
);
router.patch(
  '/:contactId',
  isValidId,
  ctrlWrapper(patchContactController),
);

export default router;
