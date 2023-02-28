# Introduction:
You can read our [mirror article](https://mirror.xyz/0x4DB9f44eF11AC71b67eCC1CB272f4CcAfCE0058c/FxFvSW8KDZHFUiy6AzwEXthL58lysW48eVj7QKB0T08) here.
# Installation:
```
npm install
```
For python requirement, we used tensorflow 2.11
Make sure to create a .env file with keys/endpoint url and etherscan api in it.
In this directory, you can find
1. contracts/GAN.sol
2. py/GAN-Pepe-5x5.ipynb
They show how we trained the model and create commands using hardhats.
3. contracts/renderer.sol
How we generate GIFs.

# On Chain DeepLearning Art

We have been searching for "how art can be presented on-chain". The history is pretty simple here (I may missed out tons of projects, but here are the most impressed projects that I have ever seen)

___
| Collection | Description|
|:---:|:---|
|Autoglyph | The first on-chain art.|
| Brotchain | Bitmap format, rendered pixel by pixel|
| OnChainMonkey | First pfp svg in one contract|
| Loot | Concept art.|
| CyberBroker | High complexity svg put on-chain|
| Tickle Beach | 3D images with WebGL |

and more...

The constraints and my approaches are precised in the following.
## Constraints
The constraints are: 
- 30m gas for any function, even if it is under "view" declaration.
- 24kb code size, proposed in EIP170. This was proposed to avoid DDOS attack.

## Our approach
The idea is to generate the whole image, pixel by pixel (like brotchain) onchain!

### GAN
So we have tried GAN process. we managed to train a model with 400000 parameters (small enough) which generated 32 x 32 realistic fake human faces. But the problem is more with solidity, we can not put these matrix in solidity (We had a 200000 int16 array) and solidity just don't want to compile it. We gave up after several tries.

### Simple one: we guess the next pixel with the last history.
This can be done with many approaches, like PixelRNN, and more. But most of them use a lots of parameters. our approach is a simpler one: From left-top to right-bottom, we take the last cases as input, and decide the color of the current case. This approach was abandonned after several failures.

### GAN, at a smaller size.
That is the current work. Hope you like it!
