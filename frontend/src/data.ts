// // import { Product, Category, SubCategory, Order, StoreApproval, UserProfile } from './types';

// // export const USER_EMAIL = 'rajansukul19@gmail.com';

// // export const INITIAL_USER: UserProfile = {
// //   name: 'Arjun Sharma',
// //   email: 'arjun.sharma@modernurban.com',
// //   avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNlnL9v0u_OPAcni8dUCRoZ9SQMGl-jfLQM8qEfNFZ40zBaQh8W3ERDZgfq9PK2eRpYnzBHi24Sa8FcciJAOMxKDY9CnSCkObTf7vNQ6mH5mWMDzesCyZ__0fuNQABVTOD423fOKrnU1IF0weWBc6b83J22SbA8eOHbFmOrrC8X5LcusG3U51nq1hv3SzTy3D95yHvcCjNerXVCRdr_vl3x1dqluZASc4e9jthc5OQOXbYO-zR6hGFD5BcN7P9Hh0Vayulx1me0Ls',
// //   membership: 'Platinum Member',
// //   referralCode: 'KIRANA-ARJUN-500'
// // };

// // export const CATEGORIES: Category[] = [
// //   { id: 'fruits', name: 'Fruits & Veg', icon: 'eco' },
// //   { id: 'dairy', name: 'Dairy', icon: 'egg' },
// //   { id: 'snacks', name: 'Snacks', icon: 'cookie' },
// //   { id: 'drinks', name: 'Drinks', icon: 'local_drink' },
// //   { id: 'household', name: 'Household', icon: 'cleaning_services' },
// //   { id: 'meat', name: 'Meat', icon: 'set_meal' },
// //   { id: 'cleaning', name: 'Cleaning', icon: 'mop' }
// // ];

// // export const SUB_CATEGORIES: SubCategory[] = [
// //   {
// //     name: 'Seasonal Fruits',
// //     category: 'fruits',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1GnNMx8zB9jCvZbM-mmnp9MsVklUMjvbAkPh4nQpiChjhsbZk6hIs4rprv32STW6Y6oSrnG6Nwu0SCRmGS2B6yqDMuQpLvdGVVLQAeoX2MUeYh1ivlKQMRkyvMMUexk4_ROLuMPzUcljMVWNdd6IbIlYoJl9YTYpbGMjyjEuuJHlmP5FJZQ7tz0z8hNL9f3MS78834PSHp4frSsic09t34MJnS0yBHNOn0s7JUzhA10A0oaJJao-mAvVDxq0xZkzMNesE-JARWUU'
// //   },
// //   {
// //     name: 'Fresh Vegetables',
// //     category: 'fruits',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm570p7iMioha9hs0bMuWIndCVx8dK3wCtNiye82XLb8Ap0r22kGYfFL27ZRbxZk8SWlY6sacTTCdpPYWyOP9RoeBBB7yHSWtRIN4QwBev3Tp-4kq4aomcF2r5fOKoN834-uMMwVo4zhFFrS6XmENAedENU4EG8RSp_xnwY20jcayDyDg4X6cl7MinQgTW4fkGvnqukcc_i0dKiQ7wlm2-k2cwS-irmYWzat6iLoK7mPd-dDCDswOZb7aI4QvGTnut9OBXeW068-0'
// //   },
// //   {
// //     name: 'Leafy Greens',
// //     category: 'fruits',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUSWmRMn8Xv0NOaTxThgLXxu9xqSMN8t7wcXSYBXQHsMf28WWCyM6y0f8FOAoKHebnl2GO72MpXGCfnddZV3tYgQDRg8EUwDJRNop_5AYojOsf_7uFWaw-04TDltQ8lH3IW8d6PTTfChYazq_eoN65raGpNW2purepwHD2JFdb0kYj_06yFhbtPR9szobBgJtbhyRzwQNxdrEkjVKLtBQ8xNH0leQx1fe5DCMrcFegke8vWwu0Kq1R85WKJ_FMCr47Rquss1S5py8'
// //   },
// //   {
// //     name: 'Exotics',
// //     category: 'fruits',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6AF2QlEtw9hulIMWtrpvhV5_wRaWrdfB96cWQkQF6e5FokmHiASLwi1wWaDOSpasrCFM25qs6V3JAx24b-8s5TyyeJ5PIW0ziKMGgcSsVeAXLWVVZhjZTckundxfQszsHebBWYpdfD2SXgbJN7EcZYFrA1CgoRWlO99lkT1scerakQI_6GD3mrxmL59kBKpExCCPgUgCqVBATVOmkoMcEt3RfV6YaTJCx9Eukt1qz-Fh1vH7xhXQIl6cWA8xnoTvAFbWhfTzcKSo'
// //   },
// //   {
// //     name: 'Cuts & Sprouts',
// //     category: 'fruits',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrnP9EJVsxWACKsRLc_T4LwBFyV2zE9bw_aL0cRCh3j3Ski4NYum4dTGYKEsbdWmcmuuWCXZVsqDXwnGVWsDL4wJ7ocgg59MROllc1Tn0FtLnhyr3U0cvbhLe5cX-Q7GhMtmW3wFC2fn5IljNoKp186b7R5qyKmytxCFxAoBtPIt6-sfRBxa_9R6RSpWuwq1OCNBsSNq_32a_JuKG3Uuw7DTKf0vCTeU43Dfj3appDUd9PqRuCZAuqhgWagS_HtCW7lvD81K50gSo'
// //   },
// //   {
// //     name: 'Mushrooms',
// //     category: 'fruits',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAHXk_dYBP3jhsfY2_noa9RqzhRG5L6b2Tx5TxYB6iwjOvr_CvDecq8suscPSpfs1GfHaDMPH4mqyk4DB09kSE5fL8gguzOreSFuEasoqgacwGZ9GO4bxMZoaZb1ZQJobdH62PkGd59_ti9YrwxvebFTTM4BzAcI4fuFblbxYaGP1W6hCFcu5W9HUuk1LBwXeyxdRmhF-JAmKVcLb5sf8D7DhlKRrfyrq4iMHprpXWVnOJU56RooLRNqP-Sgjx9bX1R6qT55YcBdk'
// //   }
// // ];

// // export const PRODUCTS: Product[] = [
// //   // Fruits Grid
// //   {
// //     id: 'p1',
// //     name: 'Fresh Red Vine Tomato',
// //     category: 'fruits',
// //     subCategory: 'Fresh Vegetables',
// //     price: 45,
// //     priceUnit: '500g',
// //     originalPrice: 60,
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCza9M1QSxx7CM13cNvo4DlNg6eTLv5IabVSc2B8ajGBGr7DCnZ4c4Wy8lT2L8qr6nTauTYffzbGZLnwXeDuuE70q4ObpCKnHZfq2dxq5bYVuVwr3XW1_nbSbh6wqi9Ed4l3nf92sPGH9nyjqKSUhpCmkTpVsbKhxENiCD-HpnnIhOExgNWO3ylqV51mO5cBrZpV2sXA9VI9hYwtJfKKwhgIrKQlN5rxSAObFJ4oGc0_ad4ESnSkg8bGeEtv1SIPMNDPgqnOZwpwKw',
// //     isOrganic: false,
// //     isBestseller: true,
// //     discountBadge: '25% OFF',
// //     description: 'Vibrant red, vine-ripened tomatoes grown carefully in organic nurseries. Rich in lycopene, vitamins, and antioxidants. Ideal for salsas, fresh salads, and everyday cooking.'
// //   },
// //   {
// //     id: 'p2',
// //     name: 'Organic Red Onion',
// //     category: 'fruits',
// //     subCategory: 'Fresh Vegetables',
// //     price: 32,
// //     priceUnit: '1kg',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGmyUBbMRUjO4dmv5PRzQiEKnT-KMEiX-IPPhDqsVeXoTUX3pOdLTmast6pCiVMYPWml-nn5Wetigrrq5dLFA0nIFUOeE4yy8tCaGzqQmBSATkksy1zwEQSWlaC05D0z4UfLCSMOGJSApH86qZc5V_TZj87jO1wGSfFHAxM3Wj3QhpkVvinaGocevMYFwUIy2R3XfJ1L128V-7ug0DH9UC3ARNrvPHsLyfppTjv9F28XPRukefkcWrSmk3OCqdDty8JOAP2WhKmsU',
// //     isOrganic: true,
// //     description: 'Crisp, pungent red onions with deep purple skins. Excellent storage quality and perfect for adding texture and flavor to savory Indian dishes and curries.'
// //   },
// //   {
// //     id: 'p3',
// //     name: 'Organic Robusta Bananas',
// //     category: 'fruits',
// //     subCategory: 'Seasonal Fruits',
// //     price: 48,
// //     priceUnit: '1 kg (approx. 6-7 pieces)',
// //     originalPrice: 60,
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChg271TgaKdCNhKSpynH6sITzVYAb9bu74Yy7_ZuNKWaNtRzKX-RFmsZ0wFKYNqqtmXqEm2FZVAgbWOiUaVQKxJMXlHA1v7jGDmJ8yD59Ddb-p1kHkbaXYgkZRaKXv3lLwngQ7Su5r_IkOfNmiSLQHJi2txqnEOX1OZ_aegKLpK8p9JCoaTc93x2jQ-J6D1vcO1T2jT_Ayy0cFDzUu-d7ie1paiQ8AmLLqAKBiICt4_m2mXEjrIErJL_6XoXPl4N7XjBLwHrSLkfg',
// //     isOrganic: true,
// //     discountBadge: '20% OFF',
// //     description: 'Naturally ripened, pesticide-free robusta bananas. Sourced directly from certified organic farms. These bananas are rich in potassium and fiber, making them an ideal healthy snack or addition to your morning cereal.',
// //     nutritionalInfo: {
// //       energy: '89 kcal',
// //       protein: '1.1 g',
// //       fiber: '2.6 g',
// //       potassium: '358 mg'
// //     }
// //   },
// //   {
// //     id: 'p4',
// //     name: 'Washington Red Apple',
// //     category: 'fruits',
// //     subCategory: 'Seasonal Fruits',
// //     price: 149,
// //     priceUnit: '4 units',
// //     originalPrice: 180,
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkY6NOK0umzwsC0T5CdEeu5ZbX3dxv9mNhQsQhKknzeX5g8IDRnnVxt372KvgOdb_PFTJqJVWKignyqDBw4kGmpb2GxJxDF2aYfDOoNtpR5T8PXVAOZIrv1muf8QG8jlnO2bL610sntidUWu1TUx0Gx-79gMVhphBmOuS0mDLcAvbKHRzh9jArYvzD3uW0_OVRp1xOnAMHcOP6rxF-nvOwTLH0Bf-_qExlri7o9T1757yPGcMJhf6OapKGGrgaj3t4qXM4D7_q2ys',
// //     isImported: true,
// //     discountBadge: '17% OFF',
// //     description: 'Crisp, sweet, and highly reliable red imports. Loaded with valuable antioxidants and dietary fibers to keep you full and energized throughout the day.'
// //   },
// //   {
// //     id: 'p5',
// //     name: 'New Crop Potatoes',
// //     category: 'fruits',
// //     subCategory: 'Fresh Vegetables',
// //     price: 30,
// //     priceUnit: '1kg',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6cy1aOqgQ4j2NYjfyYroX_eK9i1D-zBA_qnn3XxduK2nP1N1I4wLluAk8ImJT0y3XtyX7egwU9LxwmmOi_mZuw3hkSocV-qmjlMblwvce19jELp5wASQ0bFLucLbqefIY-FPc3GawkqukTl-ESPiqd-bypuGOZaT3pREhqWn_hMeQaldv33zAHsXYwZ_32VOmz2wM5SJ-N7yENdfnOaz8536944fPv7n0Fr7wAudSzZ_uVbNjuUaq4EA5zOadVxJtlDCE1E5JJCY',
// //     description: 'Earthy, freshly dug potatoes from local fields. Ideal for boiling, baking, frying, and perfect for comforting home dishes.'
// //   },
// //   {
// //     id: 'p6',
// //     name: 'English Cucumber',
// //     category: 'fruits',
// //     subCategory: 'Fresh Vegetables',
// //     price: 28,
// //     priceUnit: '500g',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzTM0v3FytTUORrJmyBoWUz9U6PEuLT5wflIS7Tw6AQOSwHAYszDB4foiMqOtLKODXAnDhnJcScwfuJt9inPikjutrodYcdb6vqm-rgb6hohVGdp8X2GZLjmXcvxwLvC33ohgtxzJTlgbAj70W1QAiGa-_iE4dWz7GpMlbNluUqNXiXilUS504h9sT9tVx2kPRB1mM4HCJ04p5bOlUynlWDsj2pC_57UuNdIpYaDUMJvTtEkznE3iw8IKQXeDmFYqqwkqVikZ2Uw4',
// //     description: 'Crisp and highly hydrating seedless cucumber. Sourced directly from state-of-the-art hydroponic farms offering supreme quality. Perfect for direct consumption and raw salads.'
// //   },

// //   // Customer Bestsellers Section (Screen 2)
// //   {
// //     id: 'p7',
// //     name: 'Premium Avocado (Hass)',
// //     category: 'fruits',
// //     subCategory: 'Exotics',
// //     price: 155, // In Rupee context $1.99 = ~155
// //     priceUnit: '1 unit',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuOyXGbDfLCiMefiQzySoWxypljJPIWNsspxONCKfwjgzUm3tt0knN73y4WLGbn_lg0wklaBqmQDu0E1uLOlfAkSmaKbUcPN9wmr66Qrchw0TRKbar2OOJcQGvsm8qWxACCc6lJLGVdutbUzVrhGAgY7QXeifkF2Q_o9O4qy03pI_UCx89YJ-8UDkuoiGNropenOIBHf1l93dtNwD0eAGUxzIJx1uH1YWuSN65LGh_G-b8DdEbwn2PXtRZ_rAyBObuMxv-KuBCjgQ',
// //     isBestseller: true,
// //     description: 'Creamy Hass avocado imported from global growers. Ideal for making delicious guilt-free guacamole, spreads, and high-nutrition salads.'
// //   },
// //   {
// //     id: 'p8',
// //     name: 'Organic Farm Whole Milk',
// //     category: 'dairy',
// //     price: 270, // $3.49 = ~270
// //     priceUnit: '1000 ml',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgt40wNPRs6Va-WQ_bNlCW4ynQTqAltwDwvU61moMVu3BUjcvDhH81FH9sxnteUpuy8UG1Vm5Xx4pEFTJLkaTGZvhJ5rrfD5ORlzNOlQoNI-MTi0iUYb2E89lV4vIDO1AKYH6ZiQJcFwq7LecJS4SRD7_BWBzdiDH0UpRdXxiPJbmcqi7TiVGwGrkOdqVOLfvcQdDT4v4vdoCSBA5tiwTn-kKB-S-yJZ9wkqn51Y8GqppKMRtMkTREulPa7DD4Cst5-yVDKZzI0sY',
// //     isBestseller: true,
// //     description: 'Farm-fresh organic whole milk processed in certified ultra-hygienic environments. Contains fat and calcium required for skeletal development.'
// //   },
// //   {
// //     id: 'p9',
// //     name: 'Premium Golden Bananas',
// //     category: 'fruits',
// //     subCategory: 'Seasonal Fruits',
// //     price: 69, // $0.89 = ~69
// //     originalPrice: 82, // $1.05 = ~82
// //     priceUnit: '500 g',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDwNDHb4NIs6-ke1MJpAdIFEC_G6c6frFlHEkp3IMEsEtEgX5gn3oM6g9xfsIgrk_QBrCUCsoMMCTpO4udouLDfyMRnz8JjGkg2NtNa7MzeaWlfyuzlulO1fOTgt6GfvLwT5BNTvAyx8oxDfxWjVLEMZs0sOzRiWpwMBB9T1Q90km6pKn5wywJaI_emY9VkGXEkM4n8TXaRPqUf92kHG6svIkxm9Yjh7LRl1b0ua3zhAP4JkfM_HXO634UekQRp2Az2SymWzfr-do',
// //     discountBadge: '15% OFF',
// //     description: 'Perfectly yellow, sweet golden bananas sourced from elite standard tree collections to maximize taste.'
// //   },
// //   {
// //     id: 'p10',
// //     name: 'Multi-grain Artisan Bread',
// //     category: 'snacks',
// //     price: 175, // $2.25 = ~175
// //     priceUnit: '400 g',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyp31saohW3Ih1TwwcGVwcGnmoXxfFpSW1A9FokfKIio5m-MR6XVFipk9v_9Tklp9P2ypKdaxZAYOOALHbpiHrDajLp8r8bKX75LBNkbttP6vJAAQLSQNUZpCYcdAAp2Dlz9PKTEZlAsh-BbD6yhTlQHoLcW8JwMKKeIxCSpxOpTvKFBf-OxN0JY8WzhR-OUEr5l864jR318I1AxIg60Pp4LlnC7fUTIiWiy_ExHlkHxcDo-gAnxDjzwqJhVcCRtB0iIg5d9Q3NCM',
// //     description: 'Freshly baked multi-grain bread featuring wholesome kernels offering high dietary fiber. Clean bakery aroma guaranteed.'
// //   },

// //   // More Dairy Options
// //   {
// //     id: 'p11',
// //     name: 'Fresh Whole Milk (Carton)',
// //     category: 'dairy',
// //     price: 32,
// //     priceUnit: '500 ml',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ0dO22LabjPZOKhvPCaVfo1-1EENgi0skZddV7Z5qR_0_iuGDcNqXRnyde1GcoWHTtdIpg5sKzCZzjJtIs4YnhNuhMJArjwocuNJCw1CjJTTS9s9gWtG9DJClnO_FM-JWFGCLQ6tGBZvk-LHz-8_0HT8kQrFAn7x0C6klrhoZ_YEWCIoKAtvLFPPK3ywBb9ysJwJgg-L2fKE-Gt1csD0a76SnBxfEMfH-wyMoI3VzgI_yaKG2W0QiXVWF-BNUUVfa0DRJhXmtXiM',
// //     description: 'Hygienic and pure complete milk packed securely for daily breakfast convenience.'
// //   },
// //   {
// //     id: 'p12',
// //     name: 'Fresh Whole Milk (Glass Bottle)',
// //     category: 'dairy',
// //     price: 32,
// //     priceUnit: '500 ml',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIYdaJS9DxFe-9nJCah7M8Dy3AJSLZDGUAdltXQFxuJetmGS91J1j_VZReH6fdh7boBTqWlP05sx6J0Octl5vPRVwbLvsRs_RAs_l1Teq7zIl27VD-gGlzK-o6WCo2TDkUGyXvulUB-UbljBlWPE50ZQ_Csq15yJhgmlbMo30_NTRN7k4emQWsDab-B4oK_lhVYKO2NSA47tnfXgZWbAs0Kz9o_geMVSQc3hjoNl_wxQpv9FpSf_PRN7zv2oPXKGZoTReHcxgQfpI',
// //     description: 'Premium organic whole milk in an eco-friendly classic glass bottle preserving purity.'
// //   },

// //   // Suggestions Section (Screen 5)
// //   {
// //     id: 'p13',
// //     name: 'Amul Butter',
// //     category: 'dairy',
// //     price: 58,
// //     priceUnit: '100 g',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3MW9zMr7hTBv8wbLWrcYYWrc2NDcIfJiP4HtAW_tF4ZDnPSWoEtrYA2Oqwb6xDbFu1vwO-0eySq4dKj87st2zQOK1L_Y6O2Udk6Akl8sJsziHC842xrO4js5D_q9qv45cof--oT5QDKU08JrL3X4Pi-JPiY6cC6JLT1GxSg3NDMu4yWMQo5f1enFy5pMDdLIa4TzUNqrm5u4nIAH6brM1an3xZvISjnO3E7cjoc93dNviTYT6SHU22Cnn46k9mNfIOALFVC5Jbg8',
// //     description: 'Deliciously creamy salted butter, the undisputed favorite of millions of households.'
// //   },
// //   {
// //     id: 'p14',
// //     name: 'Farm Fresh Eggs',
// //     category: 'dairy',
// //     price: 48,
// //     priceUnit: '6 pcs',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSpWT3vTc8OXZRuCERnf4aSbj0lPE_Zn1xLK7WSvUL6uNxTc-6kKtKqXDLQ7c3inpQrk1kmNCqylZQMVYkujgZHrY5tb6mwO145MGGSu0OlhEcPAzHdO9d8SNPqX7MOtFPTsVpi8R1Qo5HCDiZJD37rdpf_Lkibw0qRpE_Wx_bIxbSqTHB5Aq4mrtXHcZo9XRPypncU1eKKe_mWjSSJY1qjZnguq7h_9MrTjbtu2VY_RClTgiQiqUYcQ7YQewCsjtrc3xebPdGTOU',
// //     description: 'Rich in protein, farm-raised healthy medium eggs delivered fresh in clean cardboard boxes.'
// //   },
// //   {
// //     id: 'p15',
// //     name: 'Peanut Butter',
// //     category: 'snacks',
// //     price: 199,
// //     priceUnit: '350 g',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4D65qALlk3Xrs3ON1NXMKGeRgZ20ClOmo1IwMS8th14gu_8ElvPyLyshPT2onG2GlzHcoYoioY_BR3IpBhgbgtgyH8J2kGafftapGATXrYit85VyLUJ8Ubqg1DypBj7YVMF7F3FQEVQhZUNUE3bOH6B4rUHRraC1Nwu7Od3lhabNvRK-mnIz1urHU5d7inyNR16j5VXVevkH-dV6BucIa4IULRroSiQh6run-lapAUc2GdMOnnXpQntN6g1kuUX1PLHYR8xzwpY8',
// //     description: 'High roast, smooth peanut butter rich in natural oils and perfect as high-nutrition bread spread.'
// //   },

// //   // "You might also like" details recommendations (Screen 4)
// //   {
// //     id: 'p16',
// //     name: 'Organic Oranges',
// //     category: 'fruits',
// //     subCategory: 'Seasonal Fruits',
// //     price: 85,
// //     priceUnit: '500 g',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZCVqw-l1J5E4TIf5n6vlLIRziUa-nO6reFs9KhHngAZOKr_e_WZPxYvSTbXl7JrD-R1erJz4RbN9zoSFBInZVtIhRoaOKMBMdx_ioal3ZI7vloqMrm6jbHdTIZtHboKtFznhLh5INLytQnBVKuzTKOLtNIZvZbI1DCs1JkvOJb5hCEAp8is3v43FpXYlpDQbGYOW9j8OXANClpu2YHU9niSeGDGaFev34iVPX7IbkjVDLN4Mnd-Uidp_vFbBode9mSzOaHIHpLB0',
// //     description: 'Vibrant and citrus-heavy organic oranges sourced directly from sunny valleys.'
// //   },
// //   {
// //     id: 'p17',
// //     name: 'Granny Smith Apples',
// //     category: 'fruits',
// //     subCategory: 'Seasonal Fruits',
// //     price: 140,
// //     priceUnit: '4 Units',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwLZEvVUe9JTblqhuTFBocBi409M49n9D16fFUZ_Kjhm4sD2ZoIqKxXLXqqsdgoGYpv-gBkb5UFeJzM1AefDbWV4-BIYZZKHwV1hZo_fNfzzhkPLdcGASFYAWg0F1_rGX_kNgDrb-JE5eSUSmYZlsV69XZ3r75PCYRuOtHu2Uf_MMd-10JA8AC_uRYSCbLy16r3i8coy35-f1R1UGdVg5AtT9yyHFlL2aESnWCbYSD7oqRuRQxSkljlvitIO8xE5WL2__DGhDPm84',
// //     description: 'Crisply acidic, signature green apples preferred globally for cooking, baking, or dieting.'
// //   },
// //   {
// //     id: 'p18',
// //     name: 'Queen Pineapple',
// //     category: 'fruits',
// //     subCategory: 'Exotics',
// //     price: 99,
// //     priceUnit: '1 Unit',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtQ0gTOtVJ7VOQjOJr9WVEzjIN2OoXHZHiGQed1i4QjzXqtslqSxoNB3BjlmNFEUs41yj7uWqMZwVPYc1SfD8bP3J_UBStEjiXW-75VQU5F2ZXfMWykoqPBhL5i8AoFhtX6LLCtjAM76it4E8ynfLGTD4s1SuUW2rQw2t6Y7FBCRzwJegxFfksB1TuczGEfzfP0D2mnXMJHGDpfT9zgJ7bqsJUjpHKL4UMYXRKxv-M5X69fAninkfXhPv6XCpUUvkYizjx4oKE0qk',
// //     description: 'Succulent golden pineapple with a distinct sweet sting, adding natural brightness to desserts.'
// //   },
// //   {
// //     id: 'p19',
// //     name: 'D\'Anjou Pears',
// //     category: 'fruits',
// //     subCategory: 'Exotics',
// //     price: 120,
// //     priceUnit: '500 g',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIKcn8WD00Awa4ONWFKRw62aGqMjLfhrHqnSXg6Ik-c2XZUCzPeKVip99pcl1N25h2Od1dYsqY6iG4p95v54TfeD9DyEQ4ekvp9fVd5-vwcF8BXAYYy7rKK1ER-b1BkQpS4DdaKE_zfRia4oH0GtWQOcMhLvKPESDKJ7Q2GJvmtLi3XSEhYkp0iycKn33j3ViXLMgXMtuiq60IRb-2CjVhO69JlquvdqTUNqux3xjDXMBACo-9dFTSDuZC3hWTfZgKcfb-FMBrIj0',
// //     description: 'Lightly green green-skinned pears reflecting sweet, slightly floral notes for fancy platters.'
// //   },

// //   // Cleaning Category Options
// //   {
// //     id: 'p20',
// //     name: 'Eco-Friendly Kitchen Spray',
// //     category: 'cleaning',
// //     price: 185,
// //     priceUnit: '1 unit',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChg9aK9DpDma1vW4LvhJAactUrSu2miOWvyX0I4rvyjUWbgrLPJoDMn0gW4ZcX7ZHVIhPe8EuuhuDLl-fIWbKghNRofYdvtTCj4rxbmt1-357n1WE6Lh1036B5aS5p6MjYouw957h_o5g6l9qjuy02ygm2Q3umrM7DK_QEoJpNif-AMAZ3i1etf87XNIe2kMcwS4OFKUGwsm4fQPRoXiVICQ26YtR5NTq3JeRhX3nc4OwtA6kteUUFaA6YUpFg9THiIcrdXE0mZ4E',
// //     description: 'Safe on food prep zones, plant-derived cleaner cuts grease in seconds without toxic fumes.'
// //   }
// // ];

// // // Initial Order History (Screen 8)
// // export const INITIAL_ORDERS: Order[] = [
// //   {
// //     id: 'KM-94021',
// //     date: '24 May, 10:30 AM',
// //     status: 'Out for Delivery',
// //     statusDetails: 'Arriving in 12 mins',
// //     itemsCount: 5,
// //     itemNamesSummary: 'Whole Wheat Bread, Avocados, Milk, Tomatoes, Sprouts',
// //     totalAmount: 842.0,
// //     items: [
// //       {
// //         productName: 'Whole Wheat Bread',
// //         quantity: 1,
// //         image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZHCpcAQzAW7r_XZzJqv80r54IwR_1N6U7oc6hzHgbUct0qT1Tlz81ze4DVY2SLBjh038J-rGVuVbnmz1yLjCRaXr1JMMtn3Fb5h7hk5-O1SSC1mO_nh9l40AuTgeoZnaUOGCKrV8AcPfWY5YNP3Q-mY3epHy66Gs48RzAVrIf0M_DOVQnMTJgkZO8kFurHR210dKVuIpn5MxFVxqFpp1-uW39iwvPTGm4HRe984N8XoTJqK0kVe0YeCinyw0K4kVB2B0E7X0mvmg'
// //       },
// //       {
// //         productName: 'Premium Oranges',
// //         quantity: 2,
// //         image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU_GQuutVEKSa2MntrLLGn8tMe9ScMJADngCwX-z796E-injLvs-YvinK_box6sTM_jUqdvGjetNUnahpoi5zdp2Z-YkP9ISolzs7JzW4IHxUUM5MY_4QhkbzOozotHJwKDyhtHdlGJmHVeANfNhih0tpP4WlK_7A0UAZ6yA7W8PQ5FT62nNhANHBhZ2G_QkkNZIdjbMP02E_BlPxfKUmeWs12mpoQsinTwmjRQ2X8g6Q3a7jMIHwxmMvSpj0BJn_OZiKMqXSugcQ'
// //       }
// //     ],
// //     orderedAtString: 'Ordered on 24 May, 10:30 AM'
// //   },
// //   {
// //     id: 'KM-88129',
// //     date: '23 May, 05:40 PM',
// //     status: 'Delivered',
// //     statusDetails: 'Yesterday, 06:15 PM',
// //     itemsCount: 13,
// //     itemNamesSummary: 'Monthly Grocery Essentials Bundle',
// //     totalAmount: 1240.5,
// //     items: [
// //       {
// //         productName: 'Vibrant Peppers Mix',
// //         quantity: 4,
// //         image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWE8lFrPpjpk5PYBj6VghPqZSMmuejUqZ3tFvtjNGyIDPzSx7YTDEiPPgs1jasXGINS_0f-M1h_Y8NviNrfFqcLBS5XbO362wTbOk7xEgwhrrMhH7hodxA5SLa777rZk0-OpM_9eHhRbRv4o7xnJ-U9HZ8PFyOnecahvKNMFSCKmQC-upJhHoTvUlHo7t4eBBOlINNhWTtMQf0jADeoP0FMBK7-tf-84IQSUYuaiOY56gLr4wsFyDA3X1WLRzrhmdBhtGMyQE8_FI'
// //       }
// //     ],
// //     orderedAtString: 'Ordered on 23 May, 05:40 PM'
// //   },
// //   {
// //     id: 'KM-77621',
// //     date: '20 May, 09:15 AM',
// //     status: 'Cancelled',
// //     statusDetails: 'Refund Initiated',
// //     itemsCount: 2,
// //     itemNamesSummary: 'Organic Honey, Green Tea',
// //     totalAmount: 450.0,
// //     items: [],
// //     orderedAtString: 'Ordered on 20 May, 09:15 AM'
// //   }
// // ];

// // // Initial Store Queue Approvals (Screen 14)
// // export const INITIAL_STORES: StoreApproval[] = [
// //   {
// //     id: 's1',
// //     name: 'Quick Fresh Mart',
// //     location: 'Andheri East, Mumbai',
// //     focus: 'Organic focus',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9HrG-KwBV9MG1LJ6CjDCBQ_h8OSQkaQScA7-kBaxqOa_qogbxdKwyi8gtUn7XvGF5dNPtYFyV9qsanVVh9JdZ-QvV37v2wIXlbw_BEsZaUjy1iuFlxKSLy1E-hKpMZsLWt6-fUo0cy5yAOCilaYyLE2QsSjgdlxejWBdpBhw2h6KvpXByyGMEIyj566B7da5u6SO9lJEFZhSxanjstKFE5395bzyO-asxUs1LjtlvjeiABmrebVv6RPdNHTTc9oZ2uj7E1RH0NBY',
// //     status: 'pending'
// //   },
// //   {
// //     id: 's2',
// //     name: 'Daily Needs Kirana',
// //     location: 'Indiranagar, Bangalore',
// //     focus: 'Local Staples',
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6yLLXHRUfL_uqE-B-qJzrPXMi006hyBVmqLSoqxvGX7-MvtD2Lj_sTY4jQROvexdd5ugjxHnKu9nap-ig7jERxHD11mosPF4jGwFr9Ik2cNIZU_Pd8gom8R5ZUEd1LmO9J_E4gGgUXnfmzgmpTEOdOOi37ZYAb-_Ctz3UL2j6XiHvnc774ChVamr3FlwWd_1w7NWcr8dE0XOPBwE5gBHX76MgTzvTs-GnAf_W1uiruzkSC5oHGApjrGHYZlHvSNEBjSXS3fpkdQ0',
// //     status: 'pending'
// //   }
// // ];

// // // Low Stock Alerts (Screen 13)
// // export interface StockAlert {
// //   id: string;
// //   name: string;
// //   quantityLeft: number;
// //   image: string;
// // }

// // export const INITIAL_STOCK_ALERTS: StockAlert[] = [
// //   {
// //     id: 'sa1',
// //     name: 'Farm Fresh Milk (1L)',
// //     quantityLeft: 5,
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb2zzb44X83wW17_RFNq67DiwhxMWnzv27qgIbO1al3zE--Umq8J5V63x7fXohtL1xg5BytAJv3gvg2bBTDU7q7abDYdWBAtaAuZT4-UzVikruxsizPnca_bR0zfA-1rYy9S--ZNRu_8lC2QgbJo7IGfdOJBP4pFhUNPONQf2QvK_QlC6zhA2fkVJbcOAo3-gUneSCKEheNVuvy7k_UMFn7OwR_udCmEXJIjA4jmkBSTwMFWkjygT6ZN3XqJ4fhhGU99j130O1LXQ'
// //   },
// //   {
// //     id: 'sa2',
// //     name: 'Whole Wheat Bread',
// //     quantityLeft: 8,
// //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChL0u11FbBqiiijk17sFiiwlVdQRj9ohvf6iP5-KJPf9eBmYQ-9LlrrJnqlgt-Kp6Rdw8j45nvkqOpyCb0M3hyyr75xeC6LZwnRDsYIW8DWztz7Tkq4xzULU9gl3M_URI7uraoi-wbnYF8UjDXxyJgHW61YPr5BYV_-upGItpx8CYTwuKRccXkAGgSA7m2xpVnwsx8XQ5Qh4gKndzhnhY5xmNntUYMEpVDAvkzk9f8Ve8KSFozgJT-w7qfixWabbCGe4vYVZWidvc'
// //   }
// // ];

// import { Product, Category, SubCategory, Order, StoreApproval, UserProfile } from './types';

// export const USER_EMAIL = 'rajansukul19@gmail.com';

// export const INITIAL_USER: UserProfile = {
//   name: 'Arjun Sharma',
//   email: 'arjun.sharma@modernurban.com',
//   avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNlnL9v0u_OPAcni8dUCRoZ9SQMGl-jfLQM8qEfNFZ40zBaQh8W3ERDZgfq9PK2eRpYnzBHi24Sa8FcciJAOMxKDY9CnSCkObTf7vNQ6mH5mWMDzesCyZ__0fuNQABVTOD423fOKrnU1IF0weWBc6b83J22SbA8eOHbFmOrrC8X5LcusG3U51nq1hv3SzTy3D95yHvcCjNerXVCRdr_vl3x1dqluZASc4e9jthc5OQOXbYO-zR6hGFD5BcN7P9Hh0Vayulx1me0Ls',
//   membership: 'Platinum Member',
//   referralCode: 'KIRANA-ARJUN-500'
// };

// export const CATEGORIES: Category[] = [
//   { id: 'fruits', name: 'Fruits & Veg', icon: 'eco' },
//   { id: 'dairy', name: 'Dairy', icon: 'egg' },
//   { id: 'snacks', name: 'Snacks', icon: 'cookie' },
//   { id: 'drinks', name: 'Drinks', icon: 'local_drink' },
//   { id: 'household', name: 'Household', icon: 'cleaning_services' },
//   { id: 'meat', name: 'Meat', icon: 'set_meal' },
//   { id: 'cleaning', name: 'Cleaning', icon: 'mop' }
// ];

// export const SUB_CATEGORIES: SubCategory[] = [
//   // Fruits & Veg Sub-Categories
//   {
//     name: 'Seasonal Fruits',
//     category: 'fruits',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1GnNMx8zB9jCvZbM-mmnp9MsVklUMjvbAkPh4nQpiChjhsbZk6hIs4rprv32STW6Y6oSrnG6Nwu0SCRmGS2B6yqDMuQpLvdGVVLQAeoX2MUeYh1ivlKQMRkyvMMUexk4_ROLuMPzUcljMVWNdd6IbIlYoJl9YTYpbGMjyjEuuJHlmP5FJZQ7tz0z8hNL9f3MS78834PSHp4frSsic09t34MJnS0yBHNOn0s7JUzhA10A0oaJJao-mAvVDxq0xZkzMNesE-JARWUU'
//   },
//   {
//     name: 'Fresh Vegetables',
//     category: 'fruits',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm570p7iMioha9hs0bMuWIndCVx8dK3wCtNiye82XLb8Ap0r22kGYfFL27ZRbxZk8SWlY6sacTTCdpPYWyOP9RoeBBB7yHSWtRIN4QwBev3Tp-4kq4aomcF2r5fOKoN834-uMMwVo4zhFFrS6XmENAedENU4EG8RSp_xnwY20jcayDyDg4X6cl7MinQgTW4fkGvnqukcc_i0dKiQ7wlm2-k2cwS-irmYWzat6iLoK7mPd-dDCDswOZb7aI4QvGTnut9OBXeW068-0'
//   },
//   {
//     name: 'Leafy Greens',
//     category: 'fruits',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUSWmRMn8Xv0NOaTxThgLXxu9xqSMN8t7wcXSYBXQHsMf28WWCyM6y0f8FOAoKHebnl2GO72MpXGCfnddZV3tYgQDRg8EUwDJRNop_5AYojOsf_7uFWaw-04TDltQ8lH3IW8d6PTTfChYazq_eoN65raGpNW2purepwHD2JFdb0kYj_06yFhbtPR9szobBgJtbhyRzwQNxdrEkjVKLtBQ8xNH0leQx1fe5DCMrcFegke8vWwu0Kq1R85WKJ_FMCr47Rquss1S5py8'
//   },
//   {
//     name: 'Exotics',
//     category: 'fruits',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6AF2QlEtw9hulIMWtrpvhV5_wRaWrdfB96cWQkQF6e5FokmHiASLwi1wWaDOSpasrCFM25qs6V3JAx24b-8s5TyyeJ5PIW0ziKMGgcSsVeAXLWVVZhjZTckundxfQszsHebBWYpdfD2SXgbJN7EcZYFrA1CgoRWlO99lkT1scerakQI_6GD3mrxmL59kBKpExCCPgUgCqVBATVOmkoMcEt3RfV6YaTJCx9Eukt1qz-Fh1vH7xhXQIl6cWA8xnoTvAFbWhfTzcKSo'
//   },
//   {
//     name: 'Cuts & Sprouts',
//     category: 'fruits',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrnP9EJVsxWACKsRLc_T4LwBFyV2zE9bw_aL0cRCh3j3Ski4NYum4dTGYKEsbdWmcmuuWCXZVsqDXwnGVWsDL4wJ7ocgg59MROllc1Tn0FtLnhyr3U0cvbhLe5cX-Q7GhMtmW3wFC2fn5IljNoKp186b7R5qyKmytxCFxAoBtPIt6-sfRBxa_9R6RSpWuwq1OCNBsSNq_32a_JuKG3Uuw7DTKf0vCTeU43Dfj3appDUd9PqRuCZAuqhgWagS_HtCW7lvD81K50gSo'
//   },
//   {
//     name: 'Mushrooms',
//     category: 'fruits',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAHXk_dYBP3jhsfY2_noa9RqzhRG5L6b2Tx5TxYB6iwjOvr_CvDecq8suscPSpfs1GfHaDMPH4mqyk4DB09kSE5fL8gguzOreSFuEasoqgacwGZ9GO4bxMZoaZb1ZQJobdH62PkGd59_ti9YrwxvebFTTM4BzAcI4fuFblbxYaGP1W6hCFcu5W9HUuk1LBwXeyxdRmhF-JAmKVcLb5sf8D7DhlKRrfyrq4iMHprpXWVnOJU56RooLRNqP-Sgjx9bX1R6qT55YcBdk'
//   },

//   // Dairy Sub-Categories
//   {
//     name: 'Milk',
//     category: 'dairy',
//     image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80'
//   },
//   {
//     name: 'Paneer & Curd',
//     category: 'dairy',
//     image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=300&q=80'
//   },
//   {
//     name: 'Butter & Cheese',
//     category: 'dairy',
//     image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=300&q=80'
//   },
//   {
//     name: 'Yogurt',
//     category: 'dairy',
//     image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=300&q=80'
//   },

//   // Snacks & Munchies Sub-Categories
//   {
//     name: 'Chips & Namkeen',
//     category: 'snacks',
//     image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=300&q=80'
//   },
//   {
//     name: 'Biscuits & Cookies',
//     category: 'snacks',
//     image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=300&q=80'
//   },
//   {
//     name: 'Chocolates & Candies',
//     category: 'snacks',
//     image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=300&q=80'
//   },

//   // Cold Drinks & Juices Sub-Categories
//   {
//     name: 'Juices',
//     category: 'drinks',
//     image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=300&q=80'
//   },
//   {
//     name: 'Soft Drinks',
//     category: 'drinks',
//     image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80'
//   },
//   {
//     name: 'Water',
//     category: 'drinks',
//     image: 'https://images.unsplash.com/photo-1560344090-aa468b8e04d4?auto=format&fit=crop&w=300&q=80'
//   },

//   // Household Essentials Sub-Categories
//   {
//     name: 'Cleaning Essentials',
//     category: 'household',
//     image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=300&q=80'
//   },
//   {
//     name: 'Laundry',
//     category: 'household',
//     image: 'https://images.unsplash.com/photo-1545173168-9f19472ef7f4?auto=format&fit=crop&w=300&q=80'
//   },
//   {
//     name: 'Paper & Disposables',
//     category: 'household',
//     image: 'https://images.unsplash.com/photo-1583541463131-bf8eaacfd093?auto=format&fit=crop&w=300&q=80'
//   },

//   // Meat & Fish Sub-Categories
//   {
//     name: 'Chicken',
//     category: 'meat',
//     image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=300&q=80'
//   },
//   {
//     name: 'Red Meat',
//     category: 'meat',
//     image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=300&q=80'
//   },
//   {
//     name: 'Eggs',
//     category: 'meat',
//     image: 'https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?auto=format&fit=crop&w=300&q=80'
//   }
// ];

// export const PRODUCTS: Product[] = [
//   // Fruits Grid
//   {
//     id: 'p1',
//     name: 'Fresh Red Vine Tomato',
//     category: 'fruits',
//     subCategory: 'Fresh Vegetables',
//     price: 45,
//     priceUnit: '500g',
//     originalPrice: 60,
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCza9M1QSxx7CM13cNvo4DlNg6eTLv5IabVSc2B8ajGBGr7DCnZ4c4Wy8lT2L8qr6nTauTYffzbGZLnwXeDuuE70q4ObpCKnHZfq2dxq5bYVuVwr3XW1_nbSbh6wqi9Ed4l3nf92sPGH9nyjqKSUhpCmkTpVsbKhxENiCD-HpnnIhOExgNWO3ylqV51mO5cBrZpV2sXA9VI9hYwtJfKKwhgIrKQlN5rxSAObFJ4oGc0_ad4ESnSkg8bGeEtv1SIPMNDPgqnOZwpwKw',
//     isOrganic: false,
//     isBestseller: true,
//     discountBadge: '25% OFF',
//     description: 'Vibrant red, vine-ripened tomatoes grown carefully in organic nurseries. Rich in lycopene, vitamins, and antioxidants. Ideal for salsas, fresh salads, and everyday cooking.'
//   },
//   {
//     id: 'p2',
//     name: 'Organic Red Onion',
//     category: 'fruits',
//     subCategory: 'Fresh Vegetables',
//     price: 32,
//     priceUnit: '1kg',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGmyUBbMRUjO4dmv5PRzQiEKnT-KMEiX-IPPhDqsVeXoTUX3pOdLTmast6pCiVMYPWml-nn5Wetigrrq5dLFA0nIFUOeE4yy8tCaGzqQmBSATkksy1zwEQSWlaC05D0z4UfLCSMOGJSApH86qZc5V_TZj87jO1wGSfFHAxM3Wj3QhpkVvinaGocevMYFwUIy2R3XfJ1L128V-7ug0DH9UC3ARNrvPHsLyfppTjv9F28XPRukefkcWrSmk3OCqdDty8JOAP2WhKmsU',
//     isOrganic: true,
//     description: 'Crisp, pungent red onions with deep purple skins. Excellent storage quality and perfect for adding texture and flavor to savory Indian dishes and curries.'
//   },
//   {
//     id: 'p3',
//     name: 'Organic Robusta Bananas',
//     category: 'fruits',
//     subCategory: 'Seasonal Fruits',
//     price: 48,
//     priceUnit: '1 kg (approx. 6-7 pieces)',
//     originalPrice: 60,
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChg271TgaKdCNhKSpynH6sITzVYAb9bu74Yy7_ZuNKWaNtRzKX-RFmsZ0wFKYNqqtmXqEm2FZVAgbWOiUaVQKxJMXlHA1v7jGDmJ8yD59Ddb-p1kHkbaXYgkZRaKXv3lLwngQ7Su5r_IkOfNmiSLQHJi2txqnEOX1OZ_aegKLpK8p9JCoaTc93x2jQ-J6D1vcO1T2jT_Ayy0cFDzUu-d7ie1paiQ8AmLLqAKBiICt4_m2mXEjrIErJL_6XoXPl4N7XjBLwHrSLkfg',
//     isOrganic: true,
//     discountBadge: '20% OFF',
//     description: 'Naturally ripened, pesticide-free robusta bananas. Sourced directly from certified organic farms. These bananas are rich in potassium and fiber, making them an ideal healthy snack or addition to your morning cereal.',
//     nutritionalInfo: {
//       energy: '89 kcal',
//       protein: '1.1 g',
//       fiber: '2.6 g',
//       potassium: '358 mg'
//     }
//   },
//   {
//     id: 'p4',
//     name: 'Washington Red Apple',
//     category: 'fruits',
//     subCategory: 'Seasonal Fruits',
//     price: 149,
//     priceUnit: '4 units',
//     originalPrice: 180,
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkY6NOK0umzwsC0T5CdEeu5ZbX3dxv9mNhQsQhKknzeX5g8IDRnnVxt372KvgOdb_PFTJqJVWKignyqDBw4kGmpb2GxJxDF2aYfDOoNtpR5T8PXVAOZIrv1muf8QG8jlnO2bL610sntidUWu1TUx0Gx-79gMVhphBmOuS0mDLcAvbKHRzh9jArYvzD3uW0_OVRp1xOnAMHcOP6rxF-nvOwTLH0Bf-_qExlri7o9T1757yPGcMJhf6OapKGGrgaj3t4qXM4D7_q2ys',
//     isImported: true,
//     discountBadge: '17% OFF',
//     description: 'Crisp, sweet, and highly reliable red imports. Loaded with valuable antioxidants and dietary fibers to keep you full and energized throughout the day.'
//   },
//   {
//     id: 'p5',
//     name: 'New Crop Potatoes',
//     category: 'fruits',
//     subCategory: 'Fresh Vegetables',
//     price: 30,
//     priceUnit: '1kg',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6cy1aOqgQ4j2NYjfyYroX_eK9i1D-zBA_qnn3XxduK2nP1N1I4wLluAk8ImJT0y3XtyX7egwU9LxwmmOi_mZuw3hkSocV-qmjlMblwvce19jELp5wASQ0bFLucLbqefIY-FPc3GawkqukTl-ESPiqd-bypuGOZaT3pREhqWn_hMeQaldv33zAHsXYwZ_32VOmz2wM5SJ-N7yENdfnOaz8536944fPv7n0Fr7wAudSzZ_uVbNjuUaq4EA5zOadVxJtlDCE1E5JJCY',
//     description: 'Earthy, freshly dug potatoes from local fields. Ideal for boiling, baking, frying, and perfect for comforting home dishes.'
//   },
//   {
//     id: 'p6',
//     name: 'English Cucumber',
//     category: 'fruits',
//     subCategory: 'Fresh Vegetables',
//     price: 28,
//     priceUnit: '500g',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzTM0v3FytTUORrJmyBoWUz9U6PEuLT5wflIS7Tw6AQOSwHAYszDB4foiMqOtLKODXAnDhnJcScwfuJt9inPikjutrodYcdb6vqm-rgb6hohVGdp8X2GZLjmXcvxwLvC33ohgtxzJTlgbAj70W1QAiGa-_iE4dWz7GpMlbNluUqNXiXilUS504h9sT9tVx2kPRB1mM4HCJ04p5bOlUynlWDsj2pC_57UuNdIpYaDUMJvTtEkznE3iw8IKQXeDmFYqqwkqVikZ2Uw4',
//     description: 'Crisp and highly hydrating seedless cucumber. Sourced directly from state-of-the-art hydroponic farms offering supreme quality. Perfect for direct consumption and raw salads.'
//   },

//   // Customer Bestsellers Section (Screen 2)
//   {
//     id: 'p7',
//     name: 'Premium Avocado (Hass)',
//     category: 'fruits',
//     subCategory: 'Exotics',
//     price: 155, // In Rupee context $1.99 = ~155
//     priceUnit: '1 unit',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuOyXGbDfLCiMefiQzySoWxypljJPIWNsspxONCKfwjgzUm3tt0knN73y4WLGbn_lg0wklaBqmQDu0E1uLOlfAkSmaKbUcPN9wmr66Qrchw0TRKbar2OOJcQGvsm8qWxACCc6lJLGVdutbUzVrhGAgY7QXeifkF2Q_o9O4qy03pI_UCx89YJ-8UDkuoiGNropenOIBHf1l93dtNwD0eAGUxzIJx1uH1YWuSN65LGh_G-b8DdEbwn2PXtRZ_rAyBObuMxv-KuBCjgQ',
//     isBestseller: true,
//     description: 'Creamy Hass avocado imported from global growers. Ideal for making delicious guilt-free guacamole, spreads, and high-nutrition salads.'
//   },
//   {
//     id: 'p8',
//     name: 'Organic Farm Whole Milk',
//     category: 'dairy',
//     price: 270, // $3.49 = ~270
//     priceUnit: '1000 ml',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgt40wNPRs6Va-WQ_bNlCW4ynQTqAltwDwvU61moMVu3BUjcvDhH81FH9sxnteUpuy8UG1Vm5Xx4pEFTJLkaTGZvhJ5rrfD5ORlzNOlQoNI-MTi0iUYb2E89lV4vIDO1AKYH6ZiQJcFwq7LecJS4SRD7_BWBzdiDH0UpRdXxiPJbmcqi7TiVGwGrkOdqVOLfvcQdDT4v4vdoCSBA5tiwTn-kKB-S-yJZ9wkqn51Y8GqppKMRtMkTREulPa7DD4Cst5-yVDKZzI0sY',
//     isBestseller: true,
//     description: 'Farm-fresh organic whole milk processed in certified ultra-hygienic environments. Contains fat and calcium required for skeletal development.'
//   },
//   {
//     id: 'p9',
//     name: 'Premium Golden Bananas',
//     category: 'fruits',
//     subCategory: 'Seasonal Fruits',
//     price: 69, // $0.89 = ~69
//     originalPrice: 82, // $1.05 = ~82
//     priceUnit: '500 g',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDwNDHb4NIs6-ke1MJpAdIFEC_G6c6frFlHEkp3IMEsEtEgX5gn3oM6g9xfsIgrk_QBrCUCsoMMCTpO4udouLDfyMRnz8JjGkg2NtNa7MzeaWlfyuzlulO1fOTgt6GfvLwT5BNTvAyx8oxDfxWjVLEMZs0sOzRiWpwMBB9T1Q90km6pKn5wywJaI_emY9VkGXEkM4n8TXaRPqUf92kHG6svIkxm9Yjh7LRl1b0ua3zhAP4JkfM_HXO634UekQRp2Az2SymWzfr-do',
//     discountBadge: '15% OFF',
//     description: 'Perfectly yellow, sweet golden bananas sourced from elite standard tree collections to maximize taste.'
//   },
//   {
//     id: 'p10',
//     name: 'Multi-grain Artisan Bread',
//     category: 'snacks',
//     price: 175, // $2.25 = ~175
//     priceUnit: '400 g',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyp31saohW3Ih1TwwcGVwcGnmoXxfFpSW1A9FokfKIio5m-MR6XVFipk9v_9Tklp9P2ypKdaxZAYOOALHbpiHrDajLp8r8bKX75LBNkbttP6vJAAQLSQNUZpCYcdAAp2Dlz9PKTEZlAsh-BbD6yhTlQHoLcW8JwMKKeIxCSpxOpTvKFBf-OxN0JY8WzhR-OUEr5l864jR318I1AxIg60Pp4LlnC7fUTIiWiy_ExHlkHxcDo-gAnxDjzwqJhVcCRtB0iIg5d9Q3NCM',
//     description: 'Freshly baked multi-grain bread featuring wholesome kernels offering high dietary fiber. Clean bakery aroma guaranteed.'
//   },

//   // More Dairy Options
//   {
//     id: 'p11',
//     name: 'Fresh Whole Milk (Carton)',
//     category: 'dairy',
//     price: 32,
//     priceUnit: '500 ml',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ0dO22LabjPZOKhvPCaVfo1-1EENgi0skZddV7Z5qR_0_iuGDcNqXRnyde1GcoWHTtdIpg5sKzCZzjJtIs4YnhNuhMJArjwocuNJCw1CjJTTS9s9gWtG9DJClnO_FM-JWFGCLQ6tGBZvk-LHz-8_0HT8kQrFAn7x0C6klrhoZ_YEWCIoKAtvLFPPK3ywBb9ysJwJgg-L2fKE-Gt1csD0a76SnBxfEMfH-wyMoI3VzgI_yaKG2W0QiXVWF-BNUUVfa0DRJhXmtXiM',
//     description: 'Hygienic and pure complete milk packed securely for daily breakfast convenience.'
//   },
//   {
//     id: 'p12',
//     name: 'Fresh Whole Milk (Glass Bottle)',
//     category: 'dairy',
//     price: 32,
//     priceUnit: '500 ml',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIYdaJS9DxFe-9nJCah7M8Dy3AJSLZDGUAdltXQFxuJetmGS91J1j_VZReH6fdh7boBTqWlP05sx6J0Octl5vPRVwbLvsRs_RAs_l1Teq7zIl27VD-gGlzK-o6WCo2TDkUGyXvulUB-UbljBlWPE50ZQ_Csq15yJhgmlbMo30_NTRN7k4emQWsDab-B4oK_lhVYKO2NSA47tnfXgZWbAs0Kz9o_geMVSQc3hjoNl_wxQpv9FpSf_PRN7zv2oPXKGZoTReHcxgQfpI',
//     description: 'Premium organic whole milk in an eco-friendly classic glass bottle preserving purity.'
//   },

//   // Suggestions Section (Screen 5)
//   {
//     id: 'p13',
//     name: 'Amul Butter',
//     category: 'dairy',
//     price: 58,
//     priceUnit: '100 g',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3MW9zMr7hTBv8wbLWrcYYWrc2NDcIfJiP4HtAW_tF4ZDnPSWoEtrYA2Oqwb6xDbFu1vwO-0eySq4dKj87st2zQOK1L_Y6O2Udk6Akl8sJsziHC842xrO4js5D_q9qv45cof--oT5QDKU08JrL3X4Pi-JPiY6cC6JLT1GxSg3NDMu4yWMQo5f1enFy5pMDdLIa4TzUNqrm5u4nIAH6brM1an3xZvISjnO3E7cjoc93dNviTYT6SHU22Cnn46k9mNfIOALFVC5Jbg8',
//     description: 'Deliciously creamy salted butter, the undisputed favorite of millions of households.'
//   },
//   {
//     id: 'p14',
//     name: 'Farm Fresh Eggs',
//     category: 'dairy',
//     price: 48,
//     priceUnit: '6 pcs',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSpWT3vTc8OXZRuCERnf4aSbj0lPE_Zn1xLK7WSvUL6uNxTc-6kKtKqXDLQ7c3inpQrk1kmNCqylZQMVYkujgZHrY5tb6mwO145MGGSu0OlhEcPAzHdO9d8SNPqX7MOtFPTsVpi8R1Qo5HCDiZJD37rdpf_Lkibw0qRpE_Wx_bIxbSqTHB5Aq4mrtXHcZo9XRPypncU1eKKe_mWjSSJY1qjZnguq7h_9MrTjbtu2VY_RClTgiQiqUYcQ7YQewCsjtrc3xebPdGTOU',
//     description: 'Rich in protein, farm-raised healthy medium eggs delivered fresh in clean cardboard boxes.'
//   },
//   {
//     id: 'p15',
//     name: 'Peanut Butter',
//     category: 'snacks',
//     price: 199,
//     priceUnit: '350 g',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4D65qALlk3Xrs3ON1NXMKGeRgZ20ClOmo1IwMS8th14gu_8ElvPyLyshPT2onG2GlzHcoYoioY_BR3IpBhgbgtgyH8J2kGafftapGATXrYit85VyLUJ8Ubqg1DypBj7YVMF7F3FQEVQhZUNUE3bOH6B4rUHRraC1Nwu7Od3lhabNvRK-mnIz1urHU5d7inyNR16j5VXVevkH-dV6BucIa4IULRroSiQh6run-lapAUc2GdMOnnXpQntN6g1kuUX1PLHYR8xzwpY8',
//     description: 'High roast, smooth peanut butter rich in natural oils and perfect as high-nutrition bread spread.'
//   },

//   // "You might also like" details recommendations (Screen 4)
//   {
//     id: 'p16',
//     name: 'Organic Oranges',
//     category: 'fruits',
//     subCategory: 'Seasonal Fruits',
//     price: 85,
//     priceUnit: '500 g',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZCVqw-l1J5E4TIf5n6vlLIRziUa-nO6reFs9KhHngAZOKr_e_WZPxYvSTbXl7JrD-R1erJz4RbN9zoSFBInZVtIhRoaOKMBMdx_ioal3ZI7vloqMrm6jbHdTIZtHboKtFznhLh5INLytQnBVKuzTKOLtNIZvZbI1DCs1JkvOJb5hCEAp8is3v43FpXYlpDQbGYOW9j8OXANClpu2YHU9niSeGDGaFev34iVPX7IbkjVDLN4Mnd-Uidp_vFbBode9mSzOaHIHpLB0',
//     description: 'Vibrant and citrus-heavy organic oranges sourced directly from sunny valleys.'
//   },
//   {
//     id: 'p17',
//     name: 'Granny Smith Apples',
//     category: 'fruits',
//     subCategory: 'Seasonal Fruits',
//     price: 140,
//     priceUnit: '4 Units',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwLZEvVUe9JTblqhuTFBocBi409M49n9D16fFUZ_Kjhm4sD2ZoIqKxXLXqqsdgoGYpv-gBkb5UFeJzM1AefDbWV4-BIYZZKHwV1hZo_fNfzzhkPLdcGASFYAWg0F1_rGX_kNgDrb-JE5eSUSmYZlsV69XZ3r75PCYRuOtHu2Uf_MMd-10JA8AC_uRYSCbLy16r3i8coy35-f1R1UGdVg5AtT9yyHFlL2aESnWCbYSD7oqRuRQxSkljlvitIO8xE5WL2__DGhDPm84',
//     description: 'Crisply acidic, signature green apples preferred globally for cooking, baking, or dieting.'
//   },
//   {
//     id: 'p18',
//     name: 'Queen Pineapple',
//     category: 'fruits',
//     subCategory: 'Exotics',
//     price: 99,
//     priceUnit: '1 Unit',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtQ0gTOtVJ7VOQjOJr9WVEzjIN2OoXHZHiGQed1i4QjzXqtslqSxoNB3BjlmNFEUs41yj7uWqMZwVPYc1SfD8bP3J_UBStEjiXW-75VQU5F2ZXfMWykoqPBhL5i8AoFhtX6LLCtjAM76it4E8ynfLGTD4s1SuUW2rQw2t6Y7FBCRzwJegxFfksB1TuczGEfzfP0D2mnXMJHGDpfT9zgJ7bqsJUjpHKL4UMYXRKxv-M5X69fAninkfXhPv6XCpUUvkYizjx4oKE0qk',
//     description: 'Succulent golden pineapple with a distinct sweet sting, adding natural brightness to desserts.'
//   },
//   {
//     id: 'p19',
//     name: 'D\'Anjou Pears',
//     category: 'fruits',
//     subCategory: 'Exotics',
//     price: 120,
//     priceUnit: '500 g',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIKcn8WD00Awa4ONWFKRw62aGqMjLfhrHqnSXg6Ik-c2XZUCzPeKVip99pcl1N25h2Od1dYsqY6iG4p95v54TfeD9DyEQ4ekvp9fVd5-vwcF8BXAYYy7rKK1ER-b1BkQpS4DdaKE_zfRia4oH0GtWQOcMhLvKPESDKJ7Q2GJvmtLi3XSEhYkp0iycKn33j3ViXLMgXMtuiq60IRb-2CjVhO69JlquvdqTUNqux3xjDXMBACo-9dFTSDuZC3hWTfZgKcfb-FMBrIj0',
//     description: 'Lightly green green-skinned pears reflecting sweet, slightly floral notes for fancy platters.'
//   },

//   // Cleaning Category Options
//   {
//     id: 'p20',
//     name: 'Eco-Friendly Kitchen Spray',
//     category: 'cleaning',
//     price: 185,
//     priceUnit: '1 unit',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChg9aK9DpDma1vW4LvhJAactUrSu2miOWvyX0I4rvyjUWbgrLPJoDMn0gW4ZcX7ZHVIhPe8EuuhuDLl-fIWbKghNRofYdvtTCj4rxbmt1-357n1WE6Lh1036B5aS5p6MjYouw957h_o5g6l9qjuy02ygm2Q3umrM7DK_QEoJpNif-AMAZ3i1etf87XNIe2kMcwS4OFKUGwsm4fQPRoXiVICQ26YtR5NTq3JeRhX3nc4OwtA6kteUUFaA6YUpFg9THiIcrdXE0mZ4E',
//     description: 'Safe on food prep zones, plant-derived cleaner cuts grease in seconds without toxic fumes.'
//   }
// ];

// // Initial Order History (Screen 8)
// export const INITIAL_ORDERS: Order[] = [
//   {
//     id: 'KM-94021',
//     date: '24 May, 10:30 AM',
//     status: 'Out for Delivery',
//     statusDetails: 'Arriving in 12 mins',
//     itemsCount: 5,
//     itemNamesSummary: 'Whole Wheat Bread, Avocados, Milk, Tomatoes, Sprouts',
//     totalAmount: 842.0,
//     items: [
//       {
//         productName: 'Whole Wheat Bread',
//         quantity: 1,
//         image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZHCpcAQzAW7r_XZzJqv80r54IwR_1N6U7oc6hzHgbUct0qT1Tlz81ze4DVY2SLBjh038J-rGVuVbnmz1yLjCRaXr1JMMtn3Fb5h7hk5-O1SSC1mO_nh9l40AuTgeoZnaUOGCKrV8AcPfWY5YNP3Q-mY3epHy66Gs48RzAVrIf0M_DOVQnMTJgkZO8kFurHR210dKVuIpn5MxFVxqFpp1-uW39iwvPTGm4HRe984N8XoTJqK0kVe0YeCinyw0K4kVB2B0E7X0mvmg'
//       },
//       {
//         productName: 'Premium Oranges',
//         quantity: 2,
//         image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU_GQuutVEKSa2MntrLLGn8tMe9ScMJADngCwX-z796E-injLvs-YvinK_box6sTM_jUqdvGjetNUnahpoi5zdp2Z-YkP9ISolzs7JzW4IHxUUM5MY_4QhkbzOozotHJwKDyhtHdlGJmHVeANfNhih0tpP4WlK_7A0UAZ6yA7W8PQ5FT62nNhANHBhZ2G_QkkNZIdjbMP02E_BlPxfKUmeWs12mpoQsinTwmjRQ2X8g6Q3a7jMIHwxmMvSpj0BJn_OZiKMqXSugcQ'
//       }
//     ],
//     orderedAtString: 'Ordered on 24 May, 10:30 AM'
//   },
//   {
//     id: 'KM-88129',
//     date: '23 May, 05:40 PM',
//     status: 'Delivered',
//     statusDetails: 'Yesterday, 06:15 PM',
//     itemsCount: 13,
//     itemNamesSummary: 'Monthly Grocery Essentials Bundle',
//     totalAmount: 1240.5,
//     items: [
//       {
//         productName: 'Vibrant Peppers Mix',
//         quantity: 4,
//         image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWE8lFrPpjpk5PYBj6VghPqZSMmuejUqZ3tFvtjNGyIDPzSx7YTDEiPPgs1jasXGINS_0f-M1h_Y8NviNrfFqcLBS5XbO362wTbOk7xEgwhrrMhH7hodxA5SLa777rZk0-OpM_9eHhRbRv4o7xnJ-U9HZ8PFyOnecahvKNMFSCKmQC-upJhHoTvUlHo7t4eBBOlINNhWTtMQf0jADeoP0FMBK7-tf-84IQSUYuaiOY56gLr4wsFyDA3X1WLRzrhmdBhtGMyQE8_FI'
//       }
//     ],
//     orderedAtString: 'Ordered on 23 May, 05:40 PM'
//   },
//   {
//     id: 'KM-77621',
//     date: '20 May, 09:15 AM',
//     status: 'Cancelled',
//     statusDetails: 'Refund Initiated',
//     itemsCount: 2,
//     itemNamesSummary: 'Organic Honey, Green Tea',
//     totalAmount: 450.0,
//     items: [],
//     orderedAtString: 'Ordered on 20 May, 09:15 AM'
//   }
// ];

// // Initial Store Queue Approvals (Screen 14)
// export const INITIAL_STORES: StoreApproval[] = [
//   {
//     id: 's1',
//     name: 'Quick Fresh Mart',
//     location: 'Andheri East, Mumbai',
//     focus: 'Organic focus',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9HrG-KwBV9MG1LJ6CjDCBQ_h8OSQkaQScA7-kBaxqOa_qogbxdKwyi8gtUn7XvGF5dNPtYFyV9qsanVVh9JdZ-QvV37v2wIXlbw_BEsZaUjy1iuFlxKSLy1E-hKpMZsLWt6-fUo0cy5yAOCilaYyLE2QsSjgdlxejWBdpBhw2h6KvpXByyGMEIyj566B7da5u6SO9lJEFZhSxanjstKFE5395bzyO-asxUs1LjtlvjeiABmrebVv6RPdNHTTc9oZ2uj7E1RH0NBY',
//     status: 'pending'
//   },
//   {
//     id: 's2',
//     name: 'Daily Needs Kirana',
//     location: 'Indiranagar, Bangalore',
//     focus: 'Local Staples',
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6yLLXHRUfL_uqE-B-qJzrPXMi006hyBVmqLSoqxvGX7-MvtD2Lj_sTY4jQROvexdd5ugjxHnKu9nap-ig7jERxHD11mosPF4jGwFr9Ik2cNIZU_Pd8gom8R5ZUEd1LmO9J_E4gGgUXnfmzgmpTEOdOOi37ZYAb-_Ctz3UL2j6XiHvnc774ChVamr3FlwWd_1w7NWcr8dE0XOPBwE5gBHX76MgTzvTs-GnAf_W1uiruzkSC5oHGApjrGHYZlHvSNEBjSXS3fpkdQ0',
//     status: 'pending'
//   }
// ];

// // Low Stock Alerts (Screen 13)
// export interface StockAlert {
//   id: string;
//   name: string;
//   quantityLeft: number;
//   image: string;
// }

// export const INITIAL_STOCK_ALERTS: StockAlert[] = [
//   {
//     id: 'sa1',
//     name: 'Farm Fresh Milk (1L)',
//     quantityLeft: 5,
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb2zzb44X83wW17_RFNq67DiwhxMWnzv27qgIbO1al3zE--Umq8J5V63x7fXohtL1xg5BytAJv3gvg2bBTDU7q7abDYdWBAtaAuZT4-UzVikruxsizPnca_bR0zfA-1rYy9S--ZNRu_8lC2QgbJo7IGfdOJBP4pFhUNPONQf2QvK_QlC6zhA2fkVJbcOAo3-gUneSCKEheNVuvy7k_UMFn7OwR_udCmEXJIjA4jmkBSTwMFWkjygT6ZN3XqJ4fhhGU99j130O1LXQ'
//   },
//   {
//     id: 'sa2',
//     name: 'Whole Wheat Bread',
//     quantityLeft: 8,
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChL0u11FbBqiiijk17sFiiwlVdQRj9ohvf6iP5-KJPf9eBmYQ-9LlrrJnqlgt-Kp6Rdw8j45nvkqOpyCb0M3hyyr75xeC6LZwnRDsYIW8DWztz7Tkq4xzULU9gl3M_URI7uraoi-wbnYF8UjDXxyJgHW61YPr5BYV_-upGItpx8CYTwuKRccXkAGgSA7m2xpVnwsx8XQ5Qh4gKndzhnhY5xmNntUYMEpVDAvkzk9f8Ve8KSFozgJT-w7qfixWabbCGe4vYVZWidvc'
//   }
// ];

import { Product, Category, SubCategory, Order, StoreApproval, UserProfile } from './types';

export const USER_EMAIL = 'rajansukul19@gmail.com';

export const INITIAL_USER: UserProfile = {
  name: 'Arjun Sharma',
  email: 'arjun.sharma@modernurban.com',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  membership: 'Platinum Member',
  referralCode: 'KIRANA-ARJUN-500'
};

export const CATEGORIES: Category[] = [
  { id: 'fruits', name: 'Fruits & Veg', icon: 'eco' },
  { id: 'dairy', name: 'Dairy', icon: 'egg' },
  { id: 'snacks', name: 'Snacks', icon: 'cookie' },
  { id: 'drinks', name: 'Drinks', icon: 'local_drink' },
  { id: 'household', name: 'Household', icon: 'cleaning_services' },
  { id: 'meat', name: 'Meat', icon: 'set_meal' },
  { id: 'cleaning', name: 'Cleaning', icon: 'mop' },
  { id: 'rice_atta', name: 'Rice & Atta', icon: 'rice_bowl' },
  { id: 'pulses_dal', name: 'Pulses & Dal', icon: 'spa' },
  { id: 'oil_ghee', name: 'Oil & Ghee', icon: 'opacity' },
  { id: 'spices_masala', name: 'Spices & Masala', icon: 'restaurant' },
  { id: 'dry_fruits', name: 'Dry Fruits', icon: 'energy_savings_leaf' },
  { id: 'bakery', name: 'Bakery', icon: 'cake' },
  { id: 'baby_care', name: 'Baby Care', icon: 'child_care' },
  { id: 'personal_care', name: 'Personal Care', icon: 'face' },
  { id: 'pet_care', name: 'Pet Care', icon: 'pets' }
];

export const SUB_CATEGORIES: SubCategory[] = [
  // Fruits & Veg Sub-Categories
  {
    name: 'Seasonal Fruits',
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Fresh Vegetables',
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1566385101042-1a010c129fa6?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Leafy Greens',
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Exotics',
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Cuts & Sprouts',
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Mushrooms',
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=300&q=80'
  },

  // Dairy Sub-Categories - FIXED IMAGES
  {
    name: 'Milk',
    category: 'dairy',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Paneer & Curd',
    category: 'dairy',
    image: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Butter & Cheese',
    category: 'dairy',
    image: 'https://images.unsplash.com/photo-1552763442-1b432a731801?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Yogurt',
    category: 'dairy',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=300&q=80'
  },

  // Snacks & Munchies Sub-Categories
  {
    name: 'Chips & Namkeen',
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Biscuits & Cookies',
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Chocolates & Candies',
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=300&q=80'
  },

  // Cold Drinks & Juices Sub-Categories - FIXED IMAGES
  {
    name: 'Juices',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Soft Drinks',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Water',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=300&q=80'
  },

  // Household Essentials Sub-Categories - FIXED IMAGES
  {
    name: 'Cleaning Essentials',
    category: 'household',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Laundry',
    category: 'household',
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Paper & Disposables',
    category: 'household',
    image: 'https://images.unsplash.com/photo-1614859324967-bdf461fec769?auto=format&fit=crop&w=300&q=80'
  },

  // Meat & Fish Sub-Categories - FIXED IMAGES
  {
    name: 'Chicken',
    category: 'meat',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Red Meat',
    category: 'meat',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Eggs',
    category: 'meat',
    image: 'https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?auto=format&fit=crop&w=300&q=80'
  },

  // Cleaning Category Sub-Categories
  {
    name: 'Sponges & Scrubbers',
    category: 'cleaning',
    image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Disinfectant Sprays',
    category: 'cleaning',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=300&q=80'
  },

  // 1. Rice & Atta Sub-Categories
  {
    name: 'Premium Basmati Rice',
    category: 'rice_atta',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Flours & Atta',
    category: 'rice_atta',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80'
  },

  // 2. Pulses & Dal Sub-Categories
  {
    name: 'Daily Dal Staples',
    category: 'pulses_dal',
    image: 'https://images.unsplash.com/photo-1585994801128-66258416caeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Whole Grains & Pulses',
    category: 'pulses_dal',
    image: 'https://images.unsplash.com/photo-1547058886-f36594d21cf1?auto=format&fit=crop&w=300&q=80'
  },

  // 3. Oil & Ghee Sub-Categories
  {
    name: 'Cooking Oils',
    category: 'oil_ghee',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Pure Desi Ghee',
    category: 'oil_ghee',
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=300&q=80'
  },

  // 4. Spices & Masala Sub-Categories
  {
    name: 'Powdered Spices',
    category: 'spices_masala',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Whole Spices',
    category: 'spices_masala',
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=300&q=80'
  },

  // 5. Dry Fruits Sub-Categories
  {
    name: 'Almonds & Cashews',
    category: 'dry_fruits',
    image: 'https://images.unsplash.com/photo-1596560548464-f01068e61a5f?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Raisins & Walnuts',
    category: 'dry_fruits',
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=300&q=80'
  },

  // 6. Bakery Sub-Categories
  {
    name: 'Breads & Loaves',
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Cakes & Muffins',
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Buns & Pav',
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=300&q=80'
  },

  // 7. Baby Care Sub-Categories
  {
    name: 'Diapers & Wipes',
    category: 'baby_care',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Baby Hygiene',
    category: 'baby_care',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eb2?auto=format&fit=crop&w=300&q=80'
  },

  // 8. Personal Care Sub-Categories
  {
    name: 'Bath & Body',
    category: 'personal_care',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Oral & Hair Care',
    category: 'personal_care',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=300&q=80'
  },

  // 9. Pet Care Sub-Categories
  {
    name: 'Dog Foods',
    category: 'pet_care',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Cat Treats',
    category: 'pet_care',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80'
  }
];

export const PRODUCTS: Product[] = [
  // Fruits Grid
  {
    id: 'p1',
    name: 'Fresh Red Vine Tomato',
    category: 'fruits',
    subCategory: 'Fresh Vegetables',
    price: 45,
    priceUnit: '500g',
    originalPrice: 60,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=300&q=80',
    isOrganic: false,
    isBestseller: true,
    discountBadge: '25% OFF',
    description: 'Vibrant red, vine-ripened tomatoes grown carefully in nurseries. Rich in lycopene, vitamins, and antioxidants. Ideal for salsas, fresh salads, and everyday cooking.'
  },
  {
    id: 'p2',
    name: 'Organic Red Onion',
    category: 'fruits',
    subCategory: 'Fresh Vegetables',
    price: 32,
    priceUnit: '1kg',
    image: 'https://images.unsplash.com/photo-1508747705-3de10eeea8a4?auto=format&fit=crop&w=300&q=80',
    isOrganic: true,
    description: 'Crisp, pungent red onions with deep purple skins. Excellent storage quality and perfect for adding texture and flavor to savory Indian dishes and curries.'
  },
  {
    id: 'p3',
    name: 'Organic Robusta Bananas',
    category: 'fruits',
    subCategory: 'Seasonal Fruits',
    price: 48,
    priceUnit: '1 kg (approx. 6-7 pieces)',
    originalPrice: 60,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=300&q=80',
    isOrganic: true,
    discountBadge: '20% OFF',
    description: 'Naturally ripened, pesticide-free robusta bananas. Sourced directly from certified organic farms. These bananas are rich in potassium and fiber, making them an ideal healthy snack or addition to your morning cereal.',
    nutritionalInfo: {
      energy: '89 kcal',
      protein: '1.1 g',
      fiber: '2.6 g',
      potassium: '358 mg'
    }
  },
  {
    id: 'p4',
    name: 'Washington Red Apple',
    category: 'fruits',
    subCategory: 'Seasonal Fruits',
    price: 149,
    priceUnit: '4 units',
    originalPrice: 180,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=300&q=80',
    isImported: true,
    discountBadge: '17% OFF',
    description: 'Crisp, sweet, and highly reliable red imports. Loaded with valuable antioxidants and dietary fibers to keep you full and energized throughout the day.'
  },
  {
    id: 'p5',
    name: 'New Crop Potatoes',
    category: 'fruits',
    subCategory: 'Fresh Vegetables',
    price: 30,
    priceUnit: '1kg',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=300&q=80',
    description: 'Earthy, freshly dug potatoes from local fields. Ideal for boiling, baking, frying, and perfect for comforting home dishes.'
  },
  {
    id: 'p6',
    name: 'English Cucumber',
    category: 'fruits',
    subCategory: 'Fresh Vegetables',
    price: 28,
    priceUnit: '500g',
    image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=300&q=80',
    description: 'Crisp and highly hydrating seedless cucumber. Sourced directly from state-of-the-art hydroponic farms offering supreme quality. Perfect for direct consumption and raw salads.'
  },

  // Customer Bestsellers Section (Screen 2)
  {
    id: 'p7',
    name: 'Premium Avocado (Hass)',
    category: 'fruits',
    subCategory: 'Exotics',
    price: 155,
    priceUnit: '1 unit',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=300&q=80',
    isBestseller: true,
    description: 'Creamy Hass avocado imported from global growers. Ideal for making delicious guilt-free guacamole, spreads, and high-nutrition salads.'
  },
  {
    id: 'p8',
    name: 'Organic Farm Whole Milk',
    category: 'dairy',
    subCategory: 'Milk',
    price: 270,
    priceUnit: '1000 ml',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80',
    isBestseller: true,
    description: 'Farm-fresh organic whole milk processed in certified ultra-hygienic environments. Contains fat and calcium required for skeletal development.'
  },
  {
    id: 'p9',
    name: 'Premium Golden Bananas',
    category: 'fruits',
    subCategory: 'Seasonal Fruits',
    price: 69,
    originalPrice: 82,
    priceUnit: '500 g',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=300&q=80',
    discountBadge: '15% OFF',
    description: 'Perfectly yellow, sweet golden bananas sourced from elite standard tree collections to maximize taste.'
  },
  {
    id: 'p10',
    name: 'Multi-grain Artisan Bread',
    category: 'snacks',
    subCategory: 'Biscuits & Cookies',
    price: 175,
    priceUnit: '400 g',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80',
    description: 'Freshly baked multi-grain bread featuring wholesome kernels offering high dietary fiber. Clean bakery aroma guaranteed.'
  },

  // More Dairy Options
  {
    id: 'p11',
    name: 'Fresh Whole Milk (Carton)',
    category: 'dairy',
    subCategory: 'Milk',
    price: 32,
    priceUnit: '500 ml',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=300&q=80',
    description: 'Hygienic and pure complete milk packed securely for daily breakfast convenience.'
  },
  {
    id: 'p12',
    name: 'Fresh Whole Milk (Glass Bottle)',
    category: 'dairy',
    subCategory: 'Milk',
    price: 32,
    priceUnit: '500 ml',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80',
    description: 'Premium organic whole milk in an eco-friendly classic glass bottle preserving purity.'
  },

  // Suggestions Section
  {
    id: 'p13',
    name: 'Amul Butter',
    category: 'dairy',
    subCategory: 'Butter & Cheese',
    price: 58,
    priceUnit: '100 g',
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=300&q=80',
    description: 'Deliciously creamy salted butter, the undisputed favorite of millions of households.'
  },
  {
    id: 'p14',
    name: 'Farm Fresh Eggs',
    category: 'meat',
    subCategory: 'Eggs',
    price: 48,
    priceUnit: '6 pcs',
    image: 'https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?auto=format&fit=crop&w=300&q=80',
    description: 'Rich in protein, farm-raised healthy medium eggs delivered fresh in clean cardboard boxes.'
  },
  {
    id: 'p15',
    name: 'Peanut Butter',
    category: 'snacks',
    subCategory: 'Chocolates & Candies',
    price: 199,
    priceUnit: '350 g',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=300&q=80',
    description: 'High roast, smooth peanut butter rich in natural oils and perfect as high-nutrition bread spread.'
  },

  // Recommendations
  {
    id: 'p16',
    name: 'Organic Oranges',
    category: 'fruits',
    subCategory: 'Seasonal Fruits',
    price: 85,
    priceUnit: '500 g',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=300&q=80',
    description: 'Vibrant and citrus-heavy organic oranges sourced directly from sunny valleys.'
  },
  {
    id: 'p17',
    name: 'Granny Smith Apples',
    category: 'fruits',
    subCategory: 'Seasonal Fruits',
    price: 140,
    priceUnit: '4 Units',
    image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=300&q=80',
    description: 'Crisply acidic, signature green apples preferred globally for cooking, baking, or dieting.'
  },
  {
    id: 'p18',
    name: 'Queen Pineapple',
    category: 'fruits',
    subCategory: 'Exotics',
    price: 99,
    priceUnit: '1 Unit',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=300&q=80',
    description: 'Succulent golden pineapple with a distinct sweet sting, adding natural brightness to desserts.'
  },
  {
    id: 'p19',
    name: 'D\'Anjou Pears',
    category: 'fruits',
    subCategory: 'Exotics',
    price: 120,
    priceUnit: '500 g',
    image: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?auto=format&fit=crop&w=300&q=80',
    description: 'Lightly green green-skinned pears reflecting sweet, slightly floral notes for fancy platters.'
  },

  // Cleaning Category Options
  {
    id: 'p20',
    name: 'Eco-Friendly Kitchen Spray',
    category: 'cleaning',
    subCategory: 'Disinfectant Sprays',
    price: 185,
    priceUnit: '1 unit',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=300&q=80',
    description: 'Safe on food prep zones, plant-derived cleaner cuts grease in seconds without toxic fumes.'
  },

  // 1. Rice & Atta Category Products
  {
    id: 'rice_1',
    name: 'India Gate Premium Basmati Rice',
    category: 'rice_atta',
    subCategory: 'Premium Basmati Rice',
    price: 115,
    priceUnit: '1kg',
    originalPrice: 135,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80',
    isBestseller: true,
    discountBadge: '15% OFF',
    description: 'Aromatic long-grained basmati rice picked from Himalayan foothill farms. Aged to perfection to render fragrant, distinct non-sticky soft texture.'
  },
  {
    id: 'rice_2',
    name: 'Aashirvaad Sharbati Atta',
    category: 'rice_atta',
    subCategory: 'Flours & Atta',
    price: 310,
    priceUnit: '5kg',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80',
    isOrganic: true,
    description: '100% MP Sharbati wheat whole grains processed securely to retain fiber. Renders super soft, nutritious golden rotis/flatbreads.'
  },
  {
    id: 'rice_3',
    name: 'Gourmet Long Grain Brown Rice',
    category: 'rice_atta',
    subCategory: 'Premium Basmati Rice',
    price: 85,
    priceUnit: '1kg',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80',
    description: 'Nutritious unpolished brown rice rich in healthy selenium, magnesium and dietary fiber. Ideal for weight management diets.'
  },

  // 2. Pulses & Dal Category Products
  {
    id: 'dal_1',
    name: 'Unpolished Toor Dal',
    category: 'pulses_dal',
    subCategory: 'Daily Dal Staples',
    price: 145,
    priceUnit: '1kg',
    originalPrice: 170,
    image: 'https://images.unsplash.com/photo-1585994801128-66258416caeb?auto=format&fit=crop&w=300&q=80',
    isBestseller: true,
    discountBadge: '15% OFF',
    description: 'Pure, organic unpolished Arhar/Toor Dal. High protein standard with zero synthetic polishing layers ensuring rich traditional taste.'
  },
  {
    id: 'dal_2',
    name: 'Organic Moong Dal Chilka',
    category: 'pulses_dal',
    subCategory: 'Daily Dal Staples',
    price: 120,
    priceUnit: '1kg',
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e2?auto=format&fit=crop&w=300&q=80',
    description: 'Split Green Moong grains featuring nourishing skins. Extremely easy to digest and perfect for comforting light khichdis.'
  },
  {
    id: 'dal_3',
    name: 'Premium Kabuli Chana',
    category: 'pulses_dal',
    subCategory: 'Whole Grains & Pulses',
    price: 135,
    priceUnit: '1kg',
    image: 'https://images.unsplash.com/photo-1547058886-f36594d21cf1?auto=format&fit=crop&w=300&q=80',
    description: 'Bold, cream-colored Kabuli chickpeas loaded with plant iron and dietary proteins. Ideal for traditional Amritsari Chole.'
  },

  // 3. Oil & Ghee Category Products
  {
    id: 'oil_1',
    name: 'Fortune Kachi Ghani Mustard Oil',
    category: 'oil_ghee',
    subCategory: 'Cooking Oils',
    price: 170,
    priceUnit: '1L',
    originalPrice: 195,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80',
    isBestseller: true,
    discountBadge: '12% OFF',
    description: 'Authentic stone mill pressed pure mustard oil featuring powerful pungent aroma. Best suited for high-heat vegetables and pickling.'
  },
  {
    id: 'oil_2',
    name: 'A2 Pure Vedic Cow Ghee',
    category: 'oil_ghee',
    subCategory: 'Pure Desi Ghee',
    price: 595,
    priceUnit: '500ml',
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=300&q=80',
    isOrganic: true,
    description: 'Hand-churned pure A2 clarified cow butter made using traditional Bilona methods. Elevates gut health, strength, and meal flavor.'
  },
  {
    id: 'oil_3',
    name: 'Saffola Active Refined Sunflower Oil',
    category: 'oil_ghee',
    subCategory: 'Cooking Oils',
    price: 145,
    priceUnit: '1L',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80',
    description: 'Light, odor-free heart-friendly sunflower oil loaded with Oryzanol and Vitamin E. Perfect for daily stir-fries.'
  },

  // 4. Spices & Masala Category Products
  {
    id: 'spice_1',
    name: 'Tata Salt Lite (Iodized)',
    category: 'spices_masala',
    subCategory: 'Powdered Spices',
    price: 28,
    priceUnit: '1kg',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=300&q=80',
    description: 'Premium vacuum-evaporated iodized salt featuring 15% lower sodium contents. Formulated wisely to assist blood pressure controls.'
  },
  {
    id: 'spice_2',
    name: 'Catch Premium Turmeric Powder',
    category: 'spices_masala',
    subCategory: 'Powdered Spices',
    price: 39,
    priceUnit: '200g',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=300&q=80',
    isOrganic: true,
    description: 'Gala golden turmeric roots processed carefully to offer intense coloring and rich anti-inflammatory curcumin elements.'
  },
  {
    id: 'spice_3',
    name: 'MDH Kitchen King Masala',
    category: 'spices_masala',
    subCategory: 'Whole Spices',
    price: 78,
    priceUnit: '100g',
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=300&q=80',
    description: 'The supreme classic blend of exotic Indian ground spices. Adds unmatched flavor depth, golden color, and aroma to standard curry bases.'
  },

  // 5. Dry Fruits Category Products
  {
    id: 'dry_1',
    name: 'California Almonds (Paper Shell)',
    category: 'dry_fruits',
    subCategory: 'Almonds & Cashews',
    price: 235,
    priceUnit: '250g',
    image: 'https://images.unsplash.com/photo-1596560548464-f01068e61a5f?auto=format&fit=crop&w=300&q=80',
    isBestseller: true,
    description: 'Elite grade, highly nutritious whole California almonds. Perfect memory booster when soaked, or crunchy toppings on modern dessert platters.'
  },
  {
    id: 'dry_2',
    name: 'W320 Golden Whole Cashews',
    category: 'dry_fruits',
    subCategory: 'Almonds & Cashews',
    price: 265,
    priceUnit: '250g',
    image: 'https://images.unsplash.com/photo-1596560548464-f01068e61a5f?auto=format&fit=crop&w=300&q=80',
    description: 'Naturally sweet and buttery ivory cashews. Packed in vacuum canisters to retain crunch and mineral content.'
  },
  {
    id: 'dry_3',
    name: 'Premium Seedless Green Raisins (Kishmish)',
    category: 'dry_fruits',
    subCategory: 'Raisins & Walnuts',
    price: 110,
    priceUnit: '200g',
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=300&q=80',
    description: 'Perfect green seedless dry grapes loaded with antioxidants. Retains moist stickiness and dynamic natural sugars.'
  },

  // 6. Bakery Category Products
  {
    id: 'bake_1',
    name: 'Gourmet Sandwich White Bread',
    category: 'bakery',
    subCategory: 'Breads & Loaves',
    price: 42,
    priceUnit: '400g',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80',
    description: 'Freshly baked active yeast white sandwich bread blocks. Extremely puffy, light texture ideal for breakfast toaster preparations.'
  },
  {
    id: 'bake_2',
    name: 'Special Whole Wheat Pav Rolls',
    category: 'bakery',
    subCategory: 'Buns & Pav',
    price: 35,
    priceUnit: '6 units',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=300&q=80',
    description: 'Traditional style soft round golden table rolls. Crafted cleanly utilizing healthy whole wheat dough fractions.'
  },
  {
    id: 'bake_3',
    name: 'Classic Chocolate Cream Muffins',
    category: 'bakery',
    subCategory: 'Cakes & Muffins',
    price: 65,
    priceUnit: '2 units',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80',
    description: 'Heavenly cocoa cake muffins injected with delicious molten dark chocolate central hearts. Perfect kid-treat afternoon snacks.'
  },

  // 7. Baby Care Category Products
  {
    id: 'baby_1',
    name: 'Pampers Secure Comfort Diapers (M)',
    category: 'baby_care',
    subCategory: 'Diapers & Wipes',
    price: 495,
    priceUnit: '32 units',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=300&q=80',
    isBestseller: true,
    description: 'Ultra absorbent diapers equipped with secure air channels and soft magic gel padding keeping baby skin dry up to 12 hours.'
  },
  {
    id: 'baby_2',
    name: 'Johnson\'s No-More-Tears Baby Shampoo',
    category: 'baby_care',
    subCategory: 'Baby Hygiene',
    price: 175,
    priceUnit: '200ml',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eb2?auto=format&fit=crop&w=300&q=80',
    description: 'Super gentle soap-free shampoo clinically tested for baby eyes/skin safety. Leaves fine hairs soft, clean, and mildly fragranced.'
  },

  // 8. Personal Care Category Products
  {
    id: 'pers_1',
    name: 'Dove Moisture Beauty Bar Soap',
    category: 'personal_care',
    subCategory: 'Bath & Body',
    price: 64,
    priceUnit: '125g',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=300&q=80',
    isBestseller: true,
    description: 'Classic skin beauty bar containing 1/4 hydrating moisturizing lotion elements. Renders touchable, glowing, soft healthy skin.'
  },
  {
    id: 'pers_2',
    name: 'Dettol Liquid Antibacterial Handwash',
    category: 'personal_care',
    subCategory: 'Bath & Body',
    price: 99,
    priceUnit: '250ml',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=300&q=80',
    description: 'Assured 99.9% clinical germ defense formula added with soothing pH-balanced moisturizers to keep hands safe and clean.'
  },

  // 9. Pet Care Category Products
  {
    id: 'pet_1',
    name: 'Pedigree Adult Dog Food (Chicken)',
    category: 'pet_care',
    subCategory: 'Dog Foods',
    price: 195,
    priceUnit: '1.2kg',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=300&q=80',
    isBestseller: true,
    description: 'Nutritionally complete daily dog kibbles highlighting healthy fibers, proteins for active muscles and glossy fur coats.'
  },
  {
    id: 'pet_2',
    name: 'Whiskas Wet Cat Gravy (Salmon)',
    category: 'pet_care',
    subCategory: 'Cat Treats',
    price: 45,
    priceUnit: '85g',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80',
    description: 'Tasty, wet cat food pouches suspended in rich savory gravy. Supplies essential hydration, active taurine, and high omega lipids.'
  }
];

// Initial Order History
export const INITIAL_ORDERS: Order[] = [
  {
    id: 'KM-94021',
    date: '24 May, 10:30 AM',
    status: 'Out for Delivery',
    statusDetails: 'Arriving in 12 mins',
    itemsCount: 5,
    itemNamesSummary: 'Whole Wheat Bread, Avocados, Milk, Tomatoes, Sprouts',
    totalAmount: 842.0,
    items: [
      {
        productName: 'Whole Wheat Bread',
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80'
      },
      {
        productName: 'Premium Oranges',
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=300&q=80'
      }
    ],
    orderedAtString: 'Ordered on 24 May, 10:30 AM'
  },
  {
    id: 'KM-88129',
    date: '23 May, 05:40 PM',
    status: 'Delivered',
    statusDetails: 'Yesterday, 06:15 PM',
    itemsCount: 13,
    itemNamesSummary: 'Monthly Grocery Essentials Bundle',
    totalAmount: 1240.5,
    items: [
      {
        productName: 'Vibrant Peppers Mix',
        quantity: 4,
        image: 'https://images.unsplash.com/photo-1566385101042-1a010c129fa6?auto=format&fit=crop&w=300&q=80'
      }
    ],
    orderedAtString: 'Ordered on 23 May, 05:40 PM'
  },
  {
    id: 'KM-77621',
    date: '20 May, 09:15 AM',
    status: 'Cancelled',
    statusDetails: 'Refund Initiated',
    itemsCount: 2,
    itemNamesSummary: 'Organic Honey, Green Tea',
    totalAmount: 450.0,
    items: [],
    orderedAtString: 'Ordered on 20 May, 09:15 AM'
  }
];

// Initial Store Queue Approvals
export const INITIAL_STORES: StoreApproval[] = [
  {
    id: 's1',
    name: 'Quick Fresh Mart',
    location: 'Andheri East, Mumbai',
    focus: 'Organic focus',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80',
    status: 'pending'
  },
  {
    id: 's2',
    name: 'Daily Needs Kirana',
    location: 'Indiranagar, Bangalore',
    focus: 'Local Staples',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=300&q=80',
    status: 'pending'
  }
];

// Low Stock Alerts (Screen 13)
export interface StockAlert {
  id: string;
  name: string;
  quantityLeft: number;
  image: string;
}

export const INITIAL_STOCK_ALERTS: StockAlert[] = [
  {
    id: 'sa1',
    name: 'Farm Fresh Milk (1L)',
    quantityLeft: 5,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80'
  }
];
