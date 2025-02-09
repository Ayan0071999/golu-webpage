"use client";
import Navbar from "../components/Navbar";
import PersonalizedMessage from "../components/PersonalizedMessage";
import PhotoGallery from "../components/PhotoGallery";
import Timeline from "../components/Timeline";
import FavoriteQuotes from "../components/FavoriteQuotes";
import HerFav from "../components/HerFav";
import LoveNotes from "../components/LoveNotes";
import SurpriseElement from "../components/SurpriseElement";
import Valentine from "../components/Valentine";
import SpotifyEmbed from "../components/spotify";
import Question from "../components/Question";
import Momo from "../components/Momo";
import LoveYou from "../components/LoveYou";
export default function Home() {
  return (
    <main className="flex flex-col items-center bg-[var(--soft-pink)]">
      <Navbar />
      <div className="container mx-auto mt-16 p-6">
        <section id="message">
          <PersonalizedMessage />
        </section>
        <section id="gallery">
          <PhotoGallery />
        </section>
        <section id="music">
          <SpotifyEmbed />
        </section>
        <section id="valentine">
          <Valentine />
        </section>
        <section id="question">
          <Question />
        </section>
        <section id="loveyou">
          <LoveYou />
        </section>
        <section id="lovenotes">
          <LoveNotes />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="herfav">
          <HerFav />
        </section>
        <section id="momo">
          <Momo />
        </section>
        <section id="quotes">
          <FavoriteQuotes />
        </section>
        <section id="surprise">
          <SurpriseElement />
        </section>
      </div>
    </main>
  );
}
