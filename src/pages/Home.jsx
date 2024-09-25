import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert";
import { Analytics } from "@vercel/analytics/react";

let soundscapes = [
  {
    name: "Ocean",
    emoji: "🌊",
    url: "https://utfs.io/f/VU8He2t54NdYu8EVsK5tgWb3e9PanFUMzSxQm0HhV1XofujB",
    volume: 1,
    attribution:
      "Seawash (calm)  by craiggroshek -- https://freesound.org/s/176617/ -- License: Creative Commons 0",
    image: "https://utfs.io/f/VU8He2t54NdYnavqSh6Uydx5HzbJtTENYqUwVaPOXZCnAiK2",
    index: 0,
  },
  {
    name: "Forest",
    emoji: "🌴",
    url: "https://utfs.io/f/VU8He2t54NdYuNACgha5tgWb3e9PanFUMzSxQm0HhV1Xofuj",
    volume: 1,
    attribution:
      "Birds In Spring (Scotland) by BurghRecords -- https://freesound.org/s/463903/ -- License: Creative Commons 0",
    image: "https://utfs.io/f/VU8He2t54NdYpgBC9am76CiVAS4EwQty3arMPfHR1bxgdkZD",
    index: 1,
  },
  {
    name: "Rain",
    emoji: "💦",
    url: "https://utfs.io/f/VU8He2t54NdY9vI0WdS2OVPpzlUIsm50S3eRo4JLb68vxBYA",
    volume: 1,
    attribution:
      "Rain.wav by idomusics -- https://freesound.org/s/518863/ -- License: Creative Commons 0",
    image: "https://utfs.io/f/VU8He2t54NdYObTBgr45tUV7W1K4ESdzvZfN8Pr2yCwGuTiB",
    index: 2,
  },
  {
    name: "River",
    emoji: "🪨",
    url: "https://utfs.io/f/VU8He2t54NdYd9CJeYhMOCr41owzn9sPYh5cNKJQFBEtaWu0",
    volume: 0.8,
    attribution:
      "river small brook stream with rolling splashy good detail.flac by kyles -- https://freesound.org/s/454155/ -- License: Creative Commons 0",
    image: "https://utfs.io/f/VU8He2t54NdYK6sDVKYu2OlbUPXGzdjtJ5iT6AaRH0yZuqD8",
    index: 3,
  },
  {
    name: "Wind",
    emoji: "💨",
    url: "https://utfs.io/f/VU8He2t54NdYhES01SIQ6Taob8Wf0SXDOuUA1VKkE9IHx4qd",
    volume: 1,
    attribution:
      "wind.ogg by sleepCircle -- https://freesound.org/s/22331/ -- License: Creative Commons 0",
    image: "https://utfs.io/f/VU8He2t54NdYvQshHTaHAWjPnCZrtxmV56SkaM3oO0qw4huf",
    index: 4,
  },
  {
    name: "Fire",
    emoji: "🔥",
    url: "https://utfs.io/f/VU8He2t54NdYGNe8h39BnItq9LXQlVPu4jNzU1xdaYCM0pF8",
    volume: 1,
    attribution:
      "Bonfire by forfie -- https://freesound.org/s/364992/ -- License: Creative Commons 0",
    image: "https://utfs.io/f/VU8He2t54NdYpRQh5Mcm76CiVAS4EwQty3arMPfHR1bxgdkZ",
    index: 5,
  },
  {
    name: "Desert",
    emoji: "🌵",
    url: "https://utfs.io/f/VU8He2t54NdYHpvbBvYhmu5O2LJfYdtvzgw0s3nbQXlkZDFS",
    volume: 1,
    attribution:
      "Desert Simple.wav by Proxima4 -- https://freesound.org/s/104320/ -- License: Creative Commons 0",
    image: "https://utfs.io/f/VU8He2t54NdYOYYMxdZ45tUV7W1K4ESdzvZfN8Pr2yCwGuTi",
    index: 6,
  },
  {
    name: "Arctic",
    emoji: "❄️",
    url: "https://utfs.io/f/VU8He2t54NdY6fCCfMVNjR9Nmtg7h50VGWKc8AQoryMUblvI",
    volume: 0.6,
    image: "https://utfs.io/f/VU8He2t54NdYxIBXaQ0DONIyCht8a6ZwdKgqEQSTLR51sMYB",
    attribution:
      "Wind__Artic__Cold.wav by cobratronik -- https://freesound.org/s/117136/ -- License: Creative Commons 0",
    index: 7,
  },
  {
    name: "Kettle",
    emoji: "☕️",
    url: "https://utfs.io/f/VU8He2t54NdY59NfzQ6fcCLQl6pk53zFgINtnv9PqHDjbRJy",
    volume: 1,
    image: "https://utfs.io/f/VU8He2t54NdYH7NV0ddYhmu5O2LJfYdtvzgw0s3nbQXlkZDF",
    attribution:
      "water boil.wav by fryzu82 -- https://freesound.org/s/142333/ -- License: Creative Commons 0",
    index: 8,
  },
  {
    name: "Crickets",
    emoji: "🦗",
    url: "https://utfs.io/f/VU8He2t54NdYOGnYUk45tUV7W1K4ESdzvZfN8Pr2yCwGuTiB",
    volume: 0.2,
    image: "https://utfs.io/f/VU8He2t54NdYDAOUVo88fqOGlaboRgjxshLUcB5MT4ZS2iE1",
    attribution:
      "crickets by FreethinkerAnon -- https://freesound.org/s/129678/ -- License: Creative Commons 0",
    index: 9,
  },
];

function CreditsMenu() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">📝 Credits</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Credits</AlertDialogTitle>
          <AlertDialogDescription>
            {soundscapes.map((sound, index) => (
              <div key={index}>
                <b>
                  {sound.emoji} {sound.name}
                </b>
                <br />
                {sound.attribution}
              </div>
            ))}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function Home() {
  const [currentURL, setCurrentURL] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (window.location.hostname === "/") {
      document.title = "Noisefill";
    }
    const audio = document.getElementById("player");
    audio.addEventListener("pause", () => {
      setPlaying(false);
      setMessage("");
    });
    audio.addEventListener("play", () => {
      setPlaying(true);
      if (document.getElementById("player").currentTime < 1) {
        setMessage("(loading)");
      } else {
        setMessage("(playing)");
      }
      if (navigator.mediaSession) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: `${document.getElementById("player").title}`,
          artist: `Playing on Noisefill`,
          artwork: [
            {
              src: document.getElementById("player").getAttribute("image"),
              sizes: "128x128",
              type: "image/png",
            },
          ],
        });

        navigator.mediaSession.setActionHandler("play", () => {
          audio.play();
        });
        navigator.mediaSession.setActionHandler("pause", () => {
          audio.pause();
        });
        navigator.mediaSession.setActionHandler("nexttrack", () => {
          const index = parseInt(audio.getAttribute("index"));
          if (index < soundscapes.length - 1) {
            playSound(
              soundscapes[index + 1].url,
              soundscapes[index + 1].volume,
              soundscapes[index + 1].name,
              soundscapes[index + 1].image,
              soundscapes[index + 1].index
            );
          } else {
            playSound(
              soundscapes[0].url,
              soundscapes[0].volume,
              soundscapes[0].name,
              soundscapes[0].image,
              soundscapes[0].index
            );
          }
        });
        navigator.mediaSession.setActionHandler("previoustrack", () => {
          const index = parseInt(audio.getAttribute("index"));
          if (index > 0) {
            playSound(
              soundscapes[index - 1].url,
              soundscapes[index - 1].volume,
              soundscapes[index - 1].name,
              soundscapes[index - 1].image,
              soundscapes[index - 1].index
            );
          } else {
            playSound(
              soundscapes[soundscapes.length - 1].url,
              soundscapes[soundscapes.length - 1].volume,
              soundscapes[soundscapes.length - 1].name,
              soundscapes[soundscapes.length - 1].image,
              soundscapes[soundscapes.length - 1].index
            );
          }
        });
      }
    });
    audio.addEventListener("loadedmetadata", () => {
      setMessage("(playing)");
    });
  }, []);
  function playSound(url, volume, name, image, index) {
    const audio = document.getElementById("player");
    if (audio.src === url && playing) {
      audio.pause();
      return;
    } else {
      audio.src = url;
      audio.volume = volume;
      audio.title = name;
      audio.setAttribute("image", image);
      audio.setAttribute("index", index);
      setCurrentURL(url);
      audio.play();
    }
  }
  return (
    <div className="px-6 flex gap-3 flex-wrap">
      <audio id="player" loop></audio>
      {soundscapes.map((sound, index) => (
        <Button
          variant="outline"
          key={index}
          onClick={() => {
            playSound(
              sound.url,
              sound.volume,
              sound.name,
              sound.image,
              sound.index
            );
          }}
        >
          {sound.emoji} {sound.name}{" "}
          {playing ? (sound.url == currentURL ? message : "") : ""}
        </Button>
      ))}
      <CreditsMenu />
      <Analytics />
    </div>
  );
}

export default Home;
