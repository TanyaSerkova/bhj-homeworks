const hole = document.getElementsByClassName("hole");
let dead = document.getElementById("dead");
let lost= document.getElementById("lost");

for (let i = 1; i < 10; i++) {
    const hole = document.getElementById(`hole${i}`);
    hole.onclick = () => {
      let holeHasMole = hole.className.includes('hole_has-mole');
      if (dead.textContent == 10) {
        alert("Вы победили!");
        dead.textContent = 0;
        lost.textContent = 0;
      } else if (holeHasMole) {
        dead.textContent++;
      }
      if (lost.textContent == 5) {
        alert('Вы проиграли!');
        dead.textContent = 0;
        lost.textContent = 0;
      } else if (holeHasMole === false) {
        lost.textContent++;
      }
    };
  }