from tqdm.notebook import tqdm
import matplotlib.pyplot as plt
import numpy as np

green = np.array([54, 151, 62])
red = np.array([183, 31, 34])
blue = np.array([48, 81, 246])
white = np.array([255, 255, 255])
black = np.array([0, 0, 0])
hat1 = np.array([119, 80, 63]) # brown
hat2 = np.array([253, 101, 34]) # orange
green2 = np.array([44, 98, 62])

paper1 = np.array([214, 199, 163])
paper2 = np.array([219, 207, 177])
pink = np.array([255, 124, 182])
purple = np.array([157, 62, 217])
light_blue = np.array([83, 238, 250])
light_green = np.array([213, 244, 134])
yellow = np.array([255, 225, 44])
orange = np.array([255, 137, 40])
red2 = np.array([227, 36, 32])

def rotate(d):
    d_ = np.zeros((5, 5, 3))
    for i in range(5):
        for j in range(5):
            d_[i][j] = d[j][4-i]
    return d_

def rotation_and_mirror(d, reverse=True):
    #d2 = rotate(d)
    #d3 = rotate(d2)
    #d4 = rotate(d3)
    if reverse:
        d_ = d[:, ::-1]
        #return [d, d2, d3, d4, d_, d_2, d_3, d_4]
        return [d, d_]
    else:
        return [d]
        #return [d, d2, d3, d4]

def get_pepe1(background=green, eyes_type=0, mouth_type=0, clothes_width=0, clothes_height=0):
    # eyes_type: 0~3
    # mouth_type: 0~2
    # clothes_height: 0 or 1
    # clothes_width: 2 ~ 5
    d = np.zeros((5, 5, 3))
    d[:] = background
    # Eyes, 0~2
    if eyes_type == 0:
        d[1, 1:5] = white
        d[1, 2:4] = black
    elif eyes_type == 1:
        d[1, 1:5] = white
        d[1, 2:5:2] = black
    elif eyes_type == 2:
        d[1, 1:5] = white
        d[1, 2:5:2] = black
        d[0, 2:5:2] = white
    elif eyes_type == 3:
        d[1, 1:5] = white
        d[1, 2:5:2] = black
        d[0, 2:5:2] = white
        d[2, 2:5:2] = white
    # Mouth
    d[3, 4-mouth_type:5] = red # mouth type from 0 to 2
    # Clothes
    d[4-clothes_height:5, 0] = blue # height = 0 or 1
    d[4, 0:clothes_width] = blue # width = 2 ~ 5
    # normalization
    d /= 255
    return rotation_and_mirror(d)

def get_pepe2(background=green, eyes_type=0, clothes_width=1):
    # eyes_type = 0~2
    # clothes_width = 0, 1 or 2
    d = np.zeros((5, 5, 3))
    d[:] = background
    
    # Eyes
    if eyes_type == 0:
        d[1, :] = white
        d[1, 1:4:2] = black
    elif eyes_type == 1:
        d[1, :] = white
        d[1, 1:4:2] = black
        d[1, 2] = background
    elif eyes_type == 2:
        d[1, 1:4:2] = black
        d[1, 2] = white
        d[0, 0] = white
        d[0, 4] = white
    if clothes_width == 0:
        d[3, 1] = red
        d[3, 3] = red
        d[4, :] = blue
        d[4, 2] = red
    else:
        mouth_width = clothes_width - 1
        d[3, 2-mouth_width:2+mouth_width+1] = red
        d[4, 2-clothes_width:2+clothes_width+1] = blue
    # normalization
    d /= 255
    return rotation_and_mirror(d, reverse=False)

def gen_dataset_original():
    dataset = []
        # eyes_type: 0~2
        # mouth_type: 0~2
        # clothes_height: 0 or 1
        # clothes_width: 2 ~ 5
    for background in [green, green, green, pink, purple, light_blue, light_green, yellow, orange]:
        for eyes_type in range(4):
            for mouth_type in range(3):
                for clothes_height in range(2):
                    for clothes_width in range(2, 6):
                        #print(x, y, reverse, hat, base_mouth, background)
                        dataset += get_pepe1(background=background, 
                                             eyes_type=eyes_type, 
                                             mouth_type=mouth_type, 
                                             clothes_width=clothes_width, 
                                             clothes_height=clothes_height
                                            )
    print(len(dataset))
    for background in [green, pink, purple, light_blue, light_green, yellow, orange]:
        for eyes_type in range(3):
            for clothes_width in range(3):
                for i in range():
                    #print(x, y, reverse, hat, base_mouth, background)
                    dataset += get_pepe2(background=background, 
                                         eyes_type=eyes_type, 
                                         clothes_width=clothes_width
                                        )
    print(len(dataset))
    dataset = np.array(dataset)
    np.random.shuffle(dataset)
    return dataset

def gen_dataset():
    dataset = []
        # eyes_type: 0~2
        # mouth_type: 0~2
        # clothes_height: 0 or 1
        # clothes_width: 2 ~ 5
    for background in [green, green, green, green, green, green, pink, purple, light_blue, light_green, yellow, orange]:
        for eyes_type in range(4):
            for mouth_type in range(3):
                for clothes_height in range(2):
                    for clothes_width in range(2, 6):
                        #print(x, y, reverse, hat, base_mouth, background)
                        dataset += get_pepe1(background=background, 
                                             eyes_type=eyes_type, 
                                             mouth_type=mouth_type, 
                                             clothes_width=clothes_width, 
                                             clothes_height=clothes_height
                                            )
    for background in [green, pink, purple, light_blue, light_green, yellow, orange]:
        for eyes_type in range(3):
            for clothes_width in range(3):
                for i in range(27):
                    #print(x, y, reverse, hat, base_mouth, background)
                    dataset += get_pepe2(background=background, 
                                         eyes_type=eyes_type, 
                                         clothes_width=clothes_width
                                        )
    print(len(dataset))
    dataset = np.array(dataset)
    np.random.shuffle(dataset)
    return dataset

def plot_image(d):
    plt.imshow(d)
    plt.axis("off")