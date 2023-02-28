# On Chain DeepLearning Art

I have been searching for "how art can be presented on-chain". The history is pretty simple here (I may missed out tons of projects, but here are the most impressed projects that I have ever seen)

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

## My approach
The idea is to generate the whole image, pixel by pixel (like brotchain) onchain!

### GAN
So I have tried GAN process. I managed to train a model with 400000 parameters (small enough) which generated 32 x 32 realistic fake human faces. But the problem is more with solidity, we can not put these matrix in solidity (I had a 200000 int16 array) and solidity just don't want to compile it. I gave up after several tries.

### Simple one: we guess the next pixel with the last history.
This can be done with many approaches, like PixelRNN, and more. But most of them use a lots of parameters. My approach is a simpler one: From left-top to right-bottom, I take the last cases as input, and decide the color of the current case.


