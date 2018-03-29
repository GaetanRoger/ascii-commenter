import os

str = "const fonts = [\n";
for dir in os.listdir("./src/assets/fonts"):
	str += "    '" + dir.replace("'", "\\'")[:-4] + "',\n";
str += "\n];\nexport default fonts;\n"

file = open("./src/fonts.ts","w")
file.write(str)
file.close()