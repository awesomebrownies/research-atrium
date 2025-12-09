A gamemode aimed to bring a tactical side to combat.

The game splits players into groups of squads sub-divided into fireteams. Squad Leaders communicate with each other to coordinate attacks and hold positions in objectives. The system favors teamwork and will punish players who do not work together. Several alpha and beta tests have been conducted with player feedback being implemented into a roughly 2-week cycle while in active development.

![Map of "Forest" inside Infiltration](https://hc-cdn.hel1.your-objectstorage.com/s/v3/d76fc021ba0238788646551af94477cdd8625129_painted-map.png)

## Firearms

The system relies on real-time projectile calculations using asynchronous threads. The advantage of such a system is timings for gunfire and hit detection are not limited by the default 20-tick main thread. In addition, hitbox calculations are latency compensated and integrated directly into the Raycast API.

## Helicopters

Due to the highly rotational nature of the vehicle, quaternions were used to track current position - Taking advantage of the mathematical representation, it allowed me to easily transform local offset vectors to absolute coordinates with respect to rotation.

## Spatial Interface

The menu system upon logging into the server is a mix between first person perspective and an interactive menu. Packet-based removal is applied to nearby players, with a gradual fade in effect when fellow players exit the main menu space. This allows for a seamless transition from battlefield to menu with an easy to use point and click for all menu elements.

A squad creation system before deployment uses a variety of packet update orders to ensure every player can see real-time personalized status. For example, the join buttons will only appear if a player is not currently in a squad.

## Screen Effects

I took advantage of the client-side implementation of GLSL shaders within resource packs. Utilizing GameTime & detectable server-side parameters, the vignette upon taking damage is animated and optimized to maintain performance. Creating this code within shader pipelines helped me better understand how massively parallel, per-pixel operations are structured and optimized.

<iframe class="youtube-frame" width="100%" src="https://www.youtube.com/embed/uUrKWwJQe50?rel=0&modestbranding=1" style="min-width=500px;" 
title="YouTube video player" frameborder="0" allowfullscreen></iframe>
<iframe class="youtube-frame" width="100%" src="https://www.youtube.com/embed/M3xHyf7THW4?rel=0&modestbranding=1"
title="YouTube video player" frameborder="0" allowfullscreen rel=0></iframe>
<iframe class="youtube-frame" width="100%" src="https://www.youtube.com/embed/k0wZm0jhGYg?rel=0&modestbranding=1"
title="YouTube video player" frameborder="0" allowfullscreen></iframe>
