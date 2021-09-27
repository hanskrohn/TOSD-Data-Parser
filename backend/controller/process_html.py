from bs4 import BeautifulSoup

class ProcessHTML:
    def init(html):
      data = ProcessHTML.cleanHTML(html)
      # Here we would want to call the ML Model
      return {"cards" : data}
    
    def cleanHTML(html):
      soup = BeautifulSoup(html, "html.parser") # create a new bs4 object from the html data loaded
      for script in soup(["script", "style"]): # remove all javascript and stylesheet code
        script.extract()
      # get text
      text = soup.get_text()
      # break into lines and remove leading and trailing space on each
      lines = (line.strip() for line in text.splitlines())
      # break multi-headlines into a line each
      chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
      # drop blank lines
      text = '\n'.join(chunk for chunk in chunks if chunk)
      return text