svg = Dir.glob("./bootstrap-icons/icons/*.svg")
svg.each do |s|
  p = File.basename(s, ".svg")
  puts `svgexport #{s} assets/icons/#{p}.png pad 128:128`
  puts `rm #{s}`
end
