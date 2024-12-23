import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export const loadBenchModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load("../public/models/bench_2/scene.gltf", (gltf) => {
    const bench1 = gltf.scene.clone();
    console.log("BENCH", gltf);

    // Iterate through all the meshes in the bench and update their materials
    bench1.traverse((child) => {
      if (child.isMesh) {
        console.log("Materials:", child.material);
        console.log("Map Material", child.material.map);
        console.log("Material Name:", child.material.name);
        console.log("Material Type:", child.material.type);
        console.log("UV attributes:", child.geometry.attributes.uv);
      }
    });

    // Default Position, Scale, and Rotation for the first bench
    bench1.position.set(0, -3.12, -10);
    bench1.rotation.set(0, Math.PI / 2, 0); // 90 degrees in radians
    bench1.scale.set(3, 3, 3);

    // Clone the first bench for the second bench
    const bench2 = bench1.clone();

    // Position the second bench opposite to the first bench
    bench2.position.set(0, -3.12, 10); // Opposite along the Z-axis
    bench2.rotation.set(0, -Math.PI / 2, 0); // Opposite rotation (flip)

    // Add both benches to the scene
    scene.add(bench1);
    scene.add(bench2);
  }, 
  undefined, 
  (error) => {
    console.error("An error occurred while loading the bench model.", error);
  });
};
