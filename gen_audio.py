# Build-time: makes audio/<hash>.mp3 for every word and example (edge-tts, free)
import asyncio,hashlib,json,os,re,subprocess,edge_tts
src=open('data.js').read()
data=json.loads(subprocess.check_output(['node','-e',src.replace('const DATA','globalThis.DATA')+';console.log(JSON.stringify(DATA))']))
texts=set()
for c in data.values():
  for e in c:
    texts.add(e[0].split(' — ')[0] if False else e[0])
    if e[3] and e[3]!='—':texts.add(e[3])
def h(t):return hashlib.md5(t.encode()).hexdigest()[:10]
sem=asyncio.Semaphore(8)
async def one(t):
  p=f'audio/{h(t)}.mp3'
  if os.path.exists(p):return
  async with sem:
    for i in range(3):
      try:await edge_tts.Communicate(t.replace(' — ','. '),'en-GB-RyanNeural',rate='-15%').save(p);return
      except Exception as ex:await asyncio.sleep(2)
async def main():await asyncio.gather(*[one(t) for t in texts])
asyncio.run(main());print(len(texts),len(os.listdir('audio')))
