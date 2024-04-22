'use client'
// hero.tsx
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="flex flex-col w-full h-screen overflow-hidden">
      <div className="w-full h-screen/2">
      <Spline scene="https://prod.spline.design/OIHZKF-QfaUqZJvC/scene.splinecode" />
      </div>
    </section>
  );
}
