// 简单交互：显示/隐藏信封 + 文字替换示例 + 文本语音（浏览器TTS）
document.addEventListener('DOMContentLoaded', () => {
  const revealBtn = document.getElementById('revealBtn');
  const envelope = document.getElementById('envelope');
  const playBtn = document.getElementById('playBtn');
  const message = document.getElementById('message');

  // 初始隐藏 envelope 元素
  envelope.classList.add('hidden');

  revealBtn.addEventListener('click', () => {
    if (envelope.classList.contains('hidden')) {
      envelope.classList.remove('hidden');
      envelope.classList.add('show');
      revealBtn.textContent = '收起信封';
    } else {
      envelope.classList.add('hidden');
      envelope.classList.remove('show');
      revealBtn.textContent = '给她一个惊喜信封 ❤️';
    }
  });

  // 点击信封也能关闭
  envelope.addEventListener('click', () => {
    envelope.classList.add('hidden');
    envelope.classList.remove('show');
    revealBtn.textContent = '给她一个惊喜信封 ❤️';
  });

  // 播放情书（使用 Web Speech API）
  playBtn.addEventListener('click', () => {
    const txt = message.innerText;
    if (!('speechSynthesis' in window)) {
      alert('抱歉，你的浏览器不支持语音播放。');
      return;
    }
    const utter = new SpeechSynthesisUtterance(txt);
    utter.lang = 'zh-CN';
    utter.rate = 1.0;
    utter.pitch = 1.0;
    speechSynthesis.cancel(); // 停止已有
    speechSynthesis.speak(utter);
  });

  // 小颗心飘动（装饰）
  for (let i = 0; i < 12; i++) {
    const h = document.createElement('div');
    h.className = 'heart';
    h.style.left = Math.random() * 100 + '%';
    h.style.top = Math.random() * 90 + '%';
    h.style.opacity = Math.random() * 0.9;
    const dur = 6 + Math.random() * 6;
    h.style.transition = `transform ${dur}s linear, opacity ${dur/2}s ease-in`;
    document.querySelector('.card').appendChild(h);
    // 动起来
    setTimeout(() => {
      h.style.transform = `translateY(-60vh) scale(${0.6 + Math.random()}) rotate(${Math.random()*360}deg)`;
      h.style.opacity = 0;
    }, 200 + Math.random()*800);
  }
});
