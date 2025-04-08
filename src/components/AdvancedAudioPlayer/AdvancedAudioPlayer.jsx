import { useRef, useState, useEffect } from 'react';

const AdvancedAudioPlayer = () => {
  const audioRef = useRef(null); // Ref для аудиоэлемента
  const [isPlaying, setIsPlaying] = useState(false); // Состояние воспроизведения
  const [currentTime, setCurrentTime] = useState(0); // Текущее время трека
  const [duration, setDuration] = useState(0); // Длительность трека
  const [volume, setVolume] = useState(0.5); // Громкость (от 0 до 1)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0); // Индекс текущего трека

  const tracks = [
    {
      title: 'Track 1',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      title: 'Track 2',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
    {
      title: 'Track 3',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    },
  ];

  // Обработчик воспроизведения/паузы
  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Обработчик изменения громкости
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  // Обработчик изменения времени трека
  const handleTimeUpdate = () => {
    /*
      Иногда audioRef.current.duration может быть NaN (Not a Number), особенно:
        когда <audio> ещё не загрузил метаданные (то есть файл еще не готов)
        при ошибке загрузки
        при изменении источника (src) до загрузки
    */
    setCurrentTime(audioRef.current.currentTime); // текущее время трека
    if (!isNaN(audioRef.current.duration)) {
      // Проверяет, что длительность реально доступна
      setDuration(audioRef.current.duration); // Длительность трека
    }
  };

  // Обработчик перемотки
  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Переход к следующему треку
  const handleNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length; // % tracks.length - Чтобы не выйти за границы массива. Это делает переключение треков зацикленным — после последнего трека снова играет первый.
    setCurrentTrackIndex(nextIndex);
  };

  // Переход к предыдущему треку
  const handlePrevTrack = () => {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIndex);
  };

  // Воспроизведение следующего трека при завершении текущего
  useEffect(() => {
    const audioElement = audioRef.current;

    const handleEnded = () => {
      handleNextTrack();
    };

    if (audioElement) {
      audioElement.addEventListener('ended', handleEnded);
    }

    /*
    Если не удалишь обработчик:
      При каждом изменении currentTrackIndex будет добавляться новый handleEnded
      Эти старые обработчики не удаляются, и в итоге:
      handleNextTrack() может вызываться много раз подряд
      Могут быть баги с неконтролируемым воспроизведением
      Рост потребления памяти → утечка
    */

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('ended', handleEnded);
      }
    };
  }, [currentTrackIndex]);

  // Обновление источника аудио при смене трека
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrackIndex].src;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrackIndex]);

  // Форматирование времени (минуты:секунды)
  const formatTime = (time) => {
    // в time передается текущее время в секундах
    if (isNaN(time)) return '0:00'; // Проверка на NaN
    const minutes = Math.floor(time / 60); // Math.floor(5 / 60) → 0  Math.floor(135.7 / 60) → 2
    const seconds = Math.floor(time % 60); // Math.floor(5 % 60) → 5  Math.floor(135.7 % 60) → 15
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Склеиваем строку "минуты:секунды", добавляем 0 если нужно
  };

  return (
    <div>
      <h2>{tracks[currentTrackIndex].title}</h2>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
      >
        <source src={tracks[currentTrackIndex].src} type="audio/mpeg" />
        Ваш браузер не поддерживает аудио.
      </audio>
      <div>
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleNextTrack}>Next Track</button>
        <button onClick={handlePrevTrack}>Prev Track</button>
      </div>
      <div>
        <input
          type="range"
          min="0"
          max={isNaN(duration) ? 0 : duration} // Проверка на NaN
          value={currentTime}
          onChange={handleSeek}
        />
        <span>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
      <div>
        <span>Громкость: </span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default AdvancedAudioPlayer;

/*
  onTimeUpdate — это событие, которое срабатывает каждый раз, когда меняется время воспроизведения <audio> (или <video>). 
  То есть, когда трек играет и "бежит время", это событие будет регулярно вызываться (обычно раз в 250 мс по умолчанию в браузерах).
*/

/*
Что такое onLoadedMetadata?
  Это событие у <audio> или <video>, которое срабатывает, когда браузер загрузил метаданные файла — то есть:  
  Длительность (duration)
  Размеры (для видео)
  Информация о потоках
*/

/*
  Резюме:
  onTimeUpdate — отслеживает текущее время во время воспроизведения
  onLoadedMetadata — устанавливает длительность сразу, как только она доступна
*/

/*
  ended — это событие, которое срабатывает, когда аудио или видео полностью проигралось до конца.
*/
