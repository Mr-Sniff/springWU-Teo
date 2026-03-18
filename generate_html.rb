def generate_pics(files)
  i = 0
  while i < files.size()
    if File.directory?(files[i])
      puts "<h2>" + String(files[i]) + "<h2>"
      generate_pics(Dir.glob(files[i] + "/*"))
    else
      generate_image_tag(files[i])
    end
    i += 1
  end
end

def generate_image_tag(file)
  puts "<img src = \"" + file + "\" alt = \"photo\"> class = \"\""
end

dir = "img/photo_portfolio"
files = Dir.glob(dir)
generate_pics(files) 
