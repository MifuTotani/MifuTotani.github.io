# -*- coding: utf-8 -*-
from pathlib import Path
import os
import re
from PIL import Image
# cf. https://chayarokurokuro.hatenablog.com/entry/2019/09/14/013746

p = Path(".")  #画像のあるディレクトリを取得
# files = sorted(p.glob("*"))        #ファイルの一覧をソートして取得
files = p.glob("*")  

for file in files:
    if file.name.startswith("."):  #隠しファイルに対しては処理を行わない
        continue
    suffix = file.suffix  
    if suffix !=".png": continue
    img = Image.open(file.name)
    width, height = img.size

    print(" width: " + str(width) + " height: " + str(height))
    # img_resize = img.resize((width/2, height/2), Image.LANCZOS)
    # img_resize.save(file.name)#面倒なので同じ名前で保存