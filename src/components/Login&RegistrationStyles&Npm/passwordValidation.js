const passwordValidator = require('password-validator');
const passwordSchema = new passwordValidator();
passwordSchema
          .is().min(6)                                    // Minimum length 6
          .is().max(20)                                  // Maximum length 100
          .has().uppercase()                              // Must have uppercase letters
          .has().lowercase()                              // Must have lowercase letters
          .has().digits()                                 // Must have digits
          .has().not().spaces();                           // Should not have spaces

export default passwordSchema;