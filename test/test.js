const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const fs = require("fs");

async function deploy() {
    const [owner, acct1] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("InChainPepeGAN");
    const contract = await Contract.deploy();
    return { owner, acct1, contract};
}
describe("Deployment", function () {
    it("Deployment", async function deployed() {
        const { owner, acct1, contract, layerOne} = await loadFixture(deploy);
        expect(await contract.owner()).to.equal(owner.address);
    });
    it("Mint", async function deployed() {
        const { owner, acct1, contract, layerOne} = await loadFixture(deploy);
        await contract.mint({value: ethers.utils.parseEther("0.0069")});
        console.log(await contract.provider.getBalance(owner.address));
        await contract.withdraw();
        console.log(await contract.provider.getBalance(owner.address));
        await contract.devMint();
        await expect(contract.devMint()).to.be.revertedWith("Dev minted!");
    });
});

describe("TokenURI", function (){
    it("Token URI test", async function () {
        const { owner, contract, acct1 } = await loadFixture(deploy);
        await contract.setWeights([312, 252, 149, 565, -632, -361, 263, -233, 129, 355, -294, -1167, 560, 77, 122, 72, 1341, 1166, 1111, 1001, 949, 142, 161, -198, 198, -229, -215, 1440, -216, 278, -294, 1011, -165, 1220, -272, 201, 1460, 453, -195, -157, 947, 1740, 359, 277, 1501, -215, -184, -63, 421, -202, 757, 627, 155, 595, -250, 177, 364, 522, -176, 292, 531, 1015, 1353, 136, 319, 770, 120, 331, 1506, -268, 100, -247, 77, 307, -128, 1139, -152, 273, 1400, 274, -97, 285, -227, -157, 1211, -154, -148, -258, 1123, 1205, 333, 289, 535, 1173, 271, 1609, 225, 398, 423, -51, 329, -265, 380, -84, 415, 348, -297, 369, -605, -445, 418, -322, -279, -485, -427, -361, -336, 379, 470, -244, 270, 478, 456, -282, 537, -335, 593, -192, 462, -464, -316, 310, -378, 37, 394, -282, -392, -638, -535, -365, -368, 414, 368, -330, 296, -251, 358, 316, 483, 291, -282, 403, 519, 281, -219, 436, 349, -397, -527, 436, 486, 358, 64, 495, -591, -288, 78, -301, 238, 233, 357, -409, 427, 233, -545, 220, 426, 234, -259, 480, -566, 438, 420, -288, -408, -469, 272, 244, 247, -456, 224, -626], 0);
        await contract.setWeights([-494, -453, -510, 528, 1010, 99, -452, 980, -482, -463, -1050, -166, 777, 664, -502, 401, -96, 461, 454, 329, 267, -493, -558, -864, -741, -795, -773, 463, -812, 596, -998, 211, -839, 430, -1179, -879, 390, -930, -674, -915, 438, 563, 640, 517, 262, -695, -623, -601, -655, -906, -777, -796, 63, -607, -1010, -52, -131, -558, -819, -55, -757, 358, 472, -4, -92, -793, 966, -11, 551, -1062, 1199, -1067, -586, -637, -492, 506, -567, -681, 477, -629, -536, -696, -1001, -663, -229, -605, -573, -1134, 523, 434, -817, -711, 556, 407, -666, 563, -154, -412, -430, 197, -423, 161, -448, 81, -389, -354, 241, -627, 684, 415, -422, 311, 433, 628, 549, 470, 444, -392, -476, 223, -227, -525, -500, 411, -599, 363, -642, 265, -472, 598, 278, -245, 542, 155, -431, 270, 479, 847, 574, 396, 530, -454, -403, 362, -205, 233, -201, -185, -485, -166, 256, -393, -475, -173, 201, -404, -228, 514, 683, -430, -446, -202, -57, -458, 763, 263, -80, 275, -239, -204, -385, 509, -462, -197, 704, -176, -447, -193, 235, -510, 650, -473, -451, 260, 503, 602, -232, -203, -217, 590, -184, 807], 0);
        await contract.setWeights([418, 655, 682, -324, -604, -195, 693, -886, 622, 641, 599, 259, -743, -612, 678, -395, 131, -409, -381, -281, -250, 657, 773, 477, 567, 473, 468, -330, 639, -573, 643, -103, 644, -385, 645, 659, -287, 879, 420, 487, -333, -502, -637, -496, -243, 414, 388, 249, 580, 508, 750, 717, 185, 579, 551, 222, 340, 536, 467, 237, 680, -323, -426, 209, 291, 760, -617, 236, -494, 596, -776, 596, 493, 528, 444, -397, 521, 551, -429, 513, 511, 561, 553, 600, 92, 553, 525, 628, -410, -387, 660, 578, -149, -364, 534, -503, -597, -545, -536, -3, 827, 362, -500, 839, -526, -619, -397, 369, 445, 528, -513, 337, -659, -113, -125, -164, -194, -502, -581, -349, -772, -623, -616, -372, -689, 401, -766, -330, -734, -183, -481, -884, -384, -1069, -533, -366, -65, -304, 421, 327, -510, -534, -488, -221, -788, -369, -1069, -1011, -265, -843, -397, -315, -519, -769, -340, -394, -926, -147, -201, -267, -455, -1094, 502, -405, -206, -418, 650, -428, -595, -742, -457, -107, -527, -775, -212, -717, -549, -790, -412, -625, -712, -568, -538, -467, -91, -165, -927, -806, 10, -172, -755, -234], 0);
        await contract.setWeights([487, 629, 627, -150, -427, -319, 650, -691, 592, 638, 231, 63, -706, -634, 603, -423, 224, -319, -286, -195, -170, 584, 688, 170, 622, 620, 603, -131, 668, -491, 743, -34, 651, -273, 241, 700, -161, 460, 517, 167, -269, -362, -639, -463, -101, 529, 476, 14, 628, 189, 849, 801, 325, 677, 194, 340, 508, 620, 180, 399, 739, -241, -317, 324, 453, 870, -451, 406, -370, 210, -575, 212, 499, 577, 424, -294, 487, 602, -321, 560, 489, 614, 223, 575, 74, 526, 499, 256, -302, -286, 719, 627, 53, -274, 584, -376, -666, -856, -805, -428, -740, 887, -732, -21, -819, -893, 1261, 27, 847, 780, -758, 602, -350, 174, 50, 14, 1, -702, -863, 1028, -732, -1009, -982, -648, -1152, 450, -1199, -405, -996, 66, 1324, -757, -328, -205, -830, 1115, 89, 63, 881, 552, -361, -854, -768, 1112, -874, 1047, -1200, -1017, -1425, -985, 1194, -1218, -1661, -922, 915, -1413, -1044, 79, 101, -1258, -1539, -1212, -627, -1590, 115, 1251, -733, 1255, -641, -717, -822, -81, -974, -712, 104, -662, -1015, -714, 1095, -1106, 299, -1005, -959, 1229, -72, 78, -824, -735, -1094, 83, -669, 108], 0);
        await contract.setWeights([116, 257, 253, 121, 332, -181, 232, 4, 236, 235, -308, 171, -299, -236, 246, -181, -100, -217, -177, -151, -159, 225, 281, -261, 101, 263, 263, -75, 299, -172, 317, -40, 280, -214, -324, 79, -144, 93, 221, -293, -151, -291, -286, -188, -176, 233, 208, -324, 142, -256, 183, 144, 393, 151, -313, 316, 428, 149, -216, 357, 168, -175, -231, 339, 386, 181, 187, 401, -258, -291, 226, -305, 117, 100, 228, -138, 271, 104, -240, 96, 276, 102, -265, 307, -322, 276, 266, -297, -137, -201, 113, 106, 293, -201, 95, -273, -38, 149, 183, -244, 215, -4, 139, -191, 161, 115, 64, 459, -421, -194, 192, -145, -517, -593, -571, -492, -465, 168, 206, 29, 48, 186, 177, -609, 227, -235, 255, -368, 197, -610, 43, 87, -640, -66, 159, 5, -475, -837, -310, -228, -669, 171, 151, -82, -12, 37, -112, -75, 109, -91, 48, 81, 49, -68, 36, 59, -26, -508, -678, 111, 67, -111, -69, 50, -756, 58, -72, 48, 101, 0, 179, -550, 225, -2, -697, -4, 193, -6, 40, 226, -622, 219, 207, 47, -545, -600, -4, -4, -275, -583, -4, -800], 0);
        await contract.setWeights([-48, -207, -201, -25, -483, 169, -209, -155, -191, -196, 390, -296, 268, 138, -198, 132, 221, 246, 200, 184, 176, -176, -221, 335, -73, -188, -177, 30, -224, 131, -237, 24, -180, 230, 427, -80, 130, 93, -151, 352, 163, 304, 257, 158, 180, -160, -141, 342, -64, 329, -48, -36, -234, -58, 371, -185, -228, -62, 293, -199, -67, 202, 268, -194, -212, -40, -240, -229, 295, 380, -300, 393, -80, -62, -166, 167, -199, -73, 277, -73, -195, -78, 362, -221, 272, -201, -194, 407, 172, 230, -75, -79, 60, 230, -69, 313, -436, -453, -454, 9, 136, 377, -386, 454, -470, -487, 157, 14, 573, 499, -431, 358, -222, 200, 158, 102, 88, -410, -485, 134, -579, -714, -689, -31, -762, 360, -851, -27, -685, 168, 145, -654, 55, -411, -590, 135, 185, 219, 520, 361, -29, -613, -545, 194, -570, 120, -756, -688, -597, -603, 156, -526, -746, -562, 92, -611, -667, 135, 177, -541, -676, -775, 94, -667, 207, 138, 136, 147, -505, -508, -501, 155, -586, -529, 182, -484, -583, -536, 107, -668, 121, -618, -587, 117, 158, 162, -636, -545, -272, 154, -515, 212], 0);
        await contract.setWeights([-7, 76, 53, 22, 152, -23, 113, 75, 32, 73, -247, 15, 78, 70, 51, 32, 114, 156, 153, 132, 107, 46, 62, -188, -111, -176, -175, 237, -154, 79, -210, 120, -172, 160, -266, -143, 208, -100, -155, -205, 139, 227, 46, 52, 162, -158, -139, -216, -27, -205, 22, -1, 79, 16, -232, 49, 83, 7, -183, 72, -20, 136, 181, 60, 75, 24, 178, 86, 205, -243, 220, -243, -104, -68, -90, 173, -107, -77, 185, -64, -89, -79, -226, -120, 151, -114, -107, -256, 180, 161, -94, -78, 36, 154, -73, 213, 85, 474, 503, -333, 809, -155, 472, -8, 455, 397, -423, 872, -880, -455, 497, -350, -777, -984, -886, -773, -745, 451, 560, -386, 124, 569, 544, -883, 660, -438, 708, -619, 523, -963, -498, 131, -983, -292, 471, -452, -757, -1361, -705, -481, -1033, 504, 443, -490, 101, -399, 36, 29, 564, 39, -440, 445, 521, 64, -352, 457, 105, -822, -1094, 506, 490, 38, 173, 518, -1218, -461, 234, -474, 227, 79, 456, -847, 547, 84, -1126, 65, 531, 77, -419, 605, -1044, 553, 529, -469, -845, -966, 91, 81, 203, -944, 71, -1293], 0);
        await contract.setWeights([616, 736, 749, -242, -695, -333, 728, -867, 701, 750, 524, 186, -868, -784, 722, -500, 278, -388, -360, -240, -202, 700, 816, 429, 787, 774, 750, -264, 869, -633, 973, -70, 855, -338, 590, 908, -239, 1016, 650, 442, -325, -437, -756, -578, -147, 666, 606, 208, 826, 459, 1084, 1020, 453, 848, 497, 464, 701, 787, 429, 542, 976, -289, -380, 452, 618, 1103, -593, 570, -444, 540, -746, 537, 645, 732, 554, -372, 647, 765, -383, 710, 654, 777, 515, 752, 176, 689, 652, 585, -387, -348, 918, 799, -56, -326, 746, -451, -413, -284, -207, -530, -68, 527, -172, -56, -240, -368, 783, 766, 3, 210, -167, 158, -760, -517, -537, -478, -442, -162, -198, 603, -379, -361, -351, -926, -372, -15, -394, -600, -321, -571, 796, -387, -796, -234, -286, 637, -489, -818, 61, -2, -834, -295, -261, 526, -523, 629, -797, -672, -565, -646, 735, -509, -769, -589, 560, -663, -633, -471, -631, -494, -709, -804, -387, -736, -701, 765, -429, 758, -255, -451, -273, -597, -318, -442, -650, -420, -364, -450, 666, -374, -560, -334, -320, 750, -588, -566, -518, -463, -967, -545, -424, -752], 0);
        // Done Layer 1 Dense
        // Layer 1 Batch normalization
        await contract.setWeights([9264, 20459, 20098, 1692, 1219, 1058, 3822, 667, 12029, 7006, 6470, 1270, 6745, 6101, 20706, 10486, 2591, 11569, 13981, 16342, 18385, 28524, 19100, 9086, 25671, 23971, 18486, 3640, 6691, 1555, 10773, 1301, 7568, 5899, 13830, 16447, 15136, 1190, 21383, 10367, 3227, 12041, 3133, 4440, 12499, 26808, 29108, 1998, 14632, 4517, 7667, 12444, 10006, 18055, 3234, 13465, 13012, 10892, 10714, 9804, 7647, 19131, 8385, 10412, 17765, 7611, 2700, 5962, 9324, 1113, 660, 6047, 1296, 2195, 4109, 2257, 7899, 9789, 13278, 17000, 10477, 13171, 17186, 11102, -54, 9284, 6425, 8583, 1668, 7037, 10324, 15460, 73, 6483, 3756, 7299],1);
        await contract.setWeights([601, 746, 750, 493, 879, 556, 717, 807, 720, 756, 859, 767, 1021, 804, 725, 555, 810, 865, 801, 684, 642, 689, 821, 701, 749, 891, 864, 929, 989, 655, 1092, 609, 916, 858, 927, 845, 920, 814, 744, 752, 702, 1200, 890, 638, 940, 768, 689, 658, 793, 727, 1070, 976, 806, 853, 819, 706, 982, 787, 648, 818, 938, 723, 962, 725, 899, 1088, 679, 906, 1078, 859, 838, 863, 626, 704, 662, 803, 778, 725, 989, 673, 781, 736, 781, 889, 866, 814, 775, 881, 802, 855, 863, 755, 703, 830, 701, 1139],2);
        await contract.setWeights([913, 1337, 1566, -2977, -2971, 1426, 839, -1122, 151, -1597, -265, 203, -367, 192, 1112, 566, -1215, -1608, 987, 254, 1211, 3007, 2515, -2201, -980, -166, -826, -810, -2410, 1416, 2234, -1206, 987, 614, 932, -1203, -1221, -2879, 2790, 2319, 180, -1003, -2689, -527, 263, 860, 2510, -2061, 10, 992, -1295, -741, 1761, 2478, -2020, 3164, 895, -1067, 1468, -228, -1300, 410, 1944, -1968, -286, 1047, -669, -1926, -1453, 1124, -1794, 1087, 2424, 478, -2472, -1850, 182, 1580, 454, -1048, 910, -898, 1791, -2088, 2206, -520, 1059, -305, -1077, -1785, -717, -226, -868, 447, -1627, -736],3);
        // Layer 1 Batch normalization done
        // Layer 2 Conv 
        await contract.setWeights([-314, -348, -276, 103, 225, -327, 324, -292, -467, -112, 32, 225, 439, -887, 633, -100, 92, -314, 101, 170, -326, -808, 313, -46, 186, 1016, 51, -957, -1427, 651, 467, 751, -388, -268, 130, -137, -450, 457, 995, 351, -92, 663, -953, 542, 683, -626, -1117, 468, -216, 295, -51, -251, 84, 589, 144, 43, -177, -391, 188, 498, 4, -121, -314, 312, -241, -379, -336, 22, -269, -247, 385, 435, 115, -299, 261, 234, -38, 66, -279, 126, -48, -451, -38, -90, -46, -173, -610, 10, 126, -210, -60, -171, 252, -145, 172, 533, -319, 417, 52, 288, 67, -1196, -118, -1147, -3312, 137, -316, -156, 445, 599, 343, 476, 496, 390, 296, 217, -1363, -248, 93, 42, -353, 486, -752, 1289, -244, 639, 52, 355, 3, -472, -165, -119, -127, 46, 746, 172, -39, 109, 1200, -1371, -303, -560, -26, 42, -380, 428, 673, 312, -570, 9, -339, 2, -233, -616, -67, 332, 201, -57, 220, 38, 118, -399, -51, -73, -47, -796, -293, 632, -350, -684, 1042, -623, 220, 159, -377, -124, -103, -56, -1048, -62, 253, 37, -790, -167, 52, -437, -153, 394, 217, 930, -692, 278, 592, 336, -357, 44, 261, -437, 519, 353, 478, 368, -5, -194, -276, -671, 270, 160, 153, -678, 530, -742, 304, 155, -927, -76, -97, -602, 115, 50, 284, -213, 181, -89, 9, 198, 37, 114, 112, -704, 892, -93, -303, -36, -166, 282, -414, -753, 301, -271, -611, -435, -461, -415, 547, 654, -98, 506, -297, -761, 206, 788, 461, -685, 553, -269, -471, 350, 260, -576, -60, 473, 144, -410, -337, 80, -1442, -542, 121, 1366, 846, 140, -642, -513, 526, 724, 286, -537, 1411, 203, -478, 559, -947, 833, 630, -221, 545, -284, -105, -139, -743, 144, 137, 289, 347, -7, 53, -512, 271, -142, 70, -16, 245, -467, 366, 281, 90, -338, 263, 14, -846, -30, 848, -251, 224, -888, -933, -496, 841, 592, 697, -196, 91, -671, -222, 198, 732, -3, -31, 1561, 81, -6, 530, -1055, -375, -29, -419, 673, 433, 221, -390, 43, -388, -293, 94, -530, -53, -103, 114, -334, -69, 295, 117, -364, 116, -272, 109, -651, -14, -40, -32, 183, 198, -154, 92, -537, 70, -150, 77, 220, -1275, -42, 92, 94, -177, -145, -153, -75, -218, 240, -13, -202, -124, -15, -304, -1424, -212, 9, -3, -870, 227, -373, -41, 488, 180, -474, 552, 242, 389, -100, -837, 1474, 88, -140, -920, 345, 615, 370, 579, 497, -769, 462, -415, -249, -1114, 58, 751, 178, -418, 191, -991, 192, -358, 682, -1007, 139, -61, 457, 61, 677, 444, -518, 440, 341, 71, 42, -261, -196, -2, -186, 369, -29, -334, 13, -43, -271, 495, 583, -60, -459, 218, -176, -343, -59, -542, 60, -133, 598, -194, 318, -110, -680, -437, -303, -211, 83, -3113, -160, -90, 347, -553, 8, 524, -11, -3, -172, -136, -5, 128, 235, 836, 55, -732, -109, -367, -64, 160, -234, 452, -895, 166, -523, -183, 486, 629, -305, 535, 788, 14, 419, -548, -641, 254, 103, 118, 169, -482, -111, 77, 287, -398, -160, 170, -647, 44, 32, -204, 147, -439, -117, 328, -38, -337, -139, 330, -26, -127, 615, -869, -657, 662, -489, 114, -343, -306, -279, -184, -920, -58, -267, -221, 330, -1139, -132, 282, -33, 371, 80, 393, 236, 1027, -538, 278, -1680, -967, -338, 487, -258], 4);
        await contract.setWeights([956, 127, -372, -457, 532, -748, -55, 527, -111, -733, 315, 1583, -107, -133, 1014, 40, -201, -301, -122, -956, -994, -283, 461, 736, 484, -314, -270, 72, 18, 78, -58, -400, 1086, -109, 813, 394, -696, -413, -400, -471, 1442, -274, 263, -645, 353, -161, 173, -193, -140, -183, 173, 378, 59, -463, -90, 223, -356, -75, -114, 205, -934, 1165, -393, 735, -959, -499, -12, 131, -633, 227, 303, 762, 254, -17, 638, 39, -429, -231, 221, -1033, 525, 559, -638, -438, 601, -650, -191, -2, -501, -22, 241, -1871, -106, 322, 283, 226, 114, 578, 10, -80, 367, 76, 14, 382, -1103, -629, 130, -174, 587, -270, 654, -761, -1940, 226, -17, -311, 16, 53, 136, 18, 120, -272, 19, 117, 74, -38, 152, -74, 103, 27, 137, -400, 43, 64, -116, 507, -566, -73, 207, 49, 449, 793, -1203, -300, -53, 489, 439, -64, -2270, 124, -670, 71, -55, 686, -232, -39, 461, -767, -81, 162, -735, -121, -98, -36, -1624, -363, -116, 912, -99, 641, 213, 75, -28, 44, -245, -400, 1159, -94, 237, 762, -620, -497, -516, -534, 909, -190, 50, -328, -883, -303, 215, 330, 468, -93, 61, 232, 104, 25, 70, -498, 1138, 65, 118, 270, -131, -252, -406, -256, 87, -474, -330, -455, 1039, 192, -384, -718, 573, 469, -337, 627, 216, 278, 32, -1, -949, -302, -333, -23, -206, 283, -136, -831, 1440, -128, -8, -885, 87, 80, 513, -501, 699, 873, 207, -82, 130, 526, 549, -731, -1193, -123, -148, -545, 281, 415, 157, -1131, -2123, 47, 265, 30, -1088, -165, 196, 257, 578, -328, 155, -353, 332, -307, 335, 270, 392, 7, 163, -890, -495, 412, -395, 224, -89, 769, -85, 118, -341, -84, -690, 718, -347, 534, 860, -747, 144, 30, -84, 15, 284, -221, -283, 132, 82, -345, -161, 679, -992, -317, -11, -1104, -1755, -456, 307, 464, 124, 668, -573, 219, 480, 884, 36, 499, -1258, -739, 55, 766, 531, 85, 18, -1318, -2163, 196, 963, -186, 704, 453, 438, -549, 389, -511, 136, 621, -315, 169, 33, -384, -789, 602, -1199, -752, -479, 918, -64, -138, 340, -422, -161, 511, -166, 1326, -387, -384, -436, -92, 214, -987, -178, 182, 74, -3, 434, 145, -53, -281, 582, -646, -424, 1250, -1582, -8, 1030, -803, 558, -273, 395, 84, -16, 9, -646, -156, 653, 303, -1451, -1294, 1204, -1115, 621, -180, -52, 551, 892, 13, -373, -39, 433, 96, 605, -376, -446, -1312, 225, -347, -1390, 677, -337, -126, 107, -384, 551, 641, 103, -294, 263, 154, 200, -557, 70, 235, 22, -1061, 630, -11, 419, 169, -357, 37, 91, -743, 113, -605, 512, -67, 403, -423, 655, -162, 13, -422, -226, -137, 853, 750, -36, -1459, -883, -529, 96, 406, -139, -72, -234, 66, 525, 846, 131, 230, -551, -737, 422, 549, 646, -67, 61, -626, -2456, 263, -134, -848, -600, -445, 145, 374, -56, 50, -117, -249, 425, 658, 92, 314, -607, -573, 60, 592, 300, -20, -5, -810, -1189, 219, 205, 80, -408, 7, -698, -297, -122, 896, -505, 761, 113, 37, -38, 232, -142, -138, 136, -185, -354, 546, -10, -556, 1142, -136, 1625, -1108, 510, -459, 251, -477, -7, 6, -39, 119, 166, 617, -1684, -1675, 563, -300, 119, -503, -283, 1222, 644, 392, -127, 303, 1416, 148, -1076, 23, 157, 23, 643, -1124, 284, -228, 61, -56, -35, 516, -18, 112, -1245, -653, 196, 507, -247, 224, -20, -684, 159, -18, -122, -219, -197, 329, -338, 92, 449, -803, 158, 256, 319, -195, 612, -190, -188, 250, -55, -41, -220, 818, -66, -111],4);
        // Layer 2 batch normalization: gamma/sqrt(var), move mean, beta
        await contract.setWeights([11752, 11968, 18264, 15932, 21748, 16132, 14291, 18590, 23804, 14313, 12230, 11355],5);
        await contract.setWeights([1025, 692, 631, 516, 305, 460, 920, 632, 371, 649, 980, 1359],6);
        await contract.setWeights([-652, 83, -1767, -460, 180, -1729, -525, -1128, -202, -2413, -1368, 2029],7);
        // Layer 3 weights
        await contract.setWeights([-4196, 3963, -4694, 3633, -42, -229, -1538, -3123, 416, 1405, -1008, 4258, -6900, -3390, -958, 4123, -94, 3489, -4799, -299, 1065, 3016, -3232, 4169, -2346, -1201, 677, 4856, -126, 535, -1710, -3965, 98, 2406, -120, 1615, 3830, 1194, -2859, -3933, 120, 1517, 3135, -940, 1050, -6305, -3892, 2877, 1757, -2934, -984, -2334, -496, 5224, 653, 3114, 1118, -4838, -3345, 1937, 2077, -1428, 1064, -5489, -7, 1804, 4416, -1632, 501, -2113, -2136, 149, 681, 1993, -208, -168, -274, -282, -914, 443, -79, -35, -326, -1545, 270, 44, -99, 4, -28, 890, 285, -859, 96, 32, -158, -1298, -3126, -1662, 572, 1429, 55, -1193, 3665, -167, 2468, -2049, 2717, 2196, 1389, -565, 217, -343, 2969, 230, -499, -1238, 4442, -6, -271, 2881, 635, -408, 42, -185, -3492, 170, -2615, 2024, 2800, 463, 358, 3215, 183, -1343, 2480, -514, -1585, -850, 2400, -3088, -807, 377, 1826, 2859],8);
        console.log(await contract.callStatic.tokenURI(5));
        await contract.devMint();
        await contract.changeRandomSeeds(5);
        console.log(await contract.callStatic.tokenURI(5));
/*
        console.log(await contract.callStatic.tokenURI(6));
        */
        //await contract.connect(owner).mint(2, {value: ethers.utils.parseEther("0.02048")});
    });
});