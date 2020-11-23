# -*- coding: utf-8 -*-
from pathlib import Path
import os
import re

#cf. https://qiita.com/kph7mgb/items/f7cd6e692c7eb102e6af

p = Path(".")  #画像のあるディレクトリを取得
# files = sorted(p.glob("*"))        #ファイルの一覧をソートして取得
files = p.glob("*")  

for file in files:
    if file.name.startswith("."):  #隠しファイルに対しては処理を行わない
        continue

    oldFilePath = file.__str__()   #現在のファイルフルパス取得
    print(oldFilePath)
    suffix = file.suffix  
    if oldFilePath[0] != 't': continue #頭文字がtorannpuのファイルを変更したい
    if suffix == ".png":
        newFilePath = re.search(r'\d+', oldFilePath).group()#　数字を取り出す https://note.nkmk.me/python-sort-num-str/
        newFilePath = str(newFilePath) + suffix
        os.rename(oldFilePath,newFilePath)  

# syurui = ''                        #種類取得用一時変数
# i = 1                             #種類ごとの連番
# for file in files:                 #1ファイルづつループ

#     if file.name.startswith("."):  #隠しファイルに対しては処理を行わない
#         continue

#     oldFilePath = file.__str__()   #現在のファイルフルパス取得
#     print(oldFilePath)

#     #parentDir = file.parent.__str__()#親ディレクトリ名取得
#     anchor = file.anchor             #ファイルパスの区切り文字取得
#     fileName = file.name             #ファイル名称取得
#     suffix = file.suffix             #ファイルの拡張子取得

#     # match = re.search(r'_(.*?)-', fileName) #正規表現　_から-の間が牌の種類名
#     # if syurui != match.group(1):     #種類ごとに連番iをカウント
#     #     syurui = match.group(1)
#     #     i = 0
#     # i = i+1
#     print( " anchor: " + anchor + " fileName: " + fileName + " suffix: " + suffix)
#     if fileName[0] != 't': continue #頭文字がtorannpuのファイルを変更したい
#     if suffix == ".png":
#         # newFileName = syurui+'_' + i.__str__() + suffix #変更後のファイル名
#         newFileName = str(i) + suffix#今回はトランプを1~52にしたいだけ
#         # newFilePath = parentDir+anchor + newFileName    #変更後のファイルフルパス
#         newFilePath = newFileName    #変更後のファイルフルパス
#         print(" newFilePath: " + newFilePath)

#         os.rename(oldFilePath,newFilePath)              #ファイル名の変更
#         i += 1

