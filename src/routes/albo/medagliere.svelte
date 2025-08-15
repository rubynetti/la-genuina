<script>
  export let seasons;

  // Calcola le statistiche per ogni mister (stile olimpiadi)
  function calculateMedagliere(seasons) {
    const misterStats = {};

    seasons.forEach(season => {
      const rank = season.rank || [];

      // Processa solo i primi 4 posti
      rank.slice(0, 4).forEach((position, index) => {
        const mister = position.mister;

        if (!misterStats[mister]) {
          misterStats[mister] = {
            oro: 0,
            argento: 0,
            bronzo: 0,
            quarto: 0
          };
        }

        // Assegna medaglie in base alla posizione
        if (index === 0) {
          misterStats[mister].oro++;
        } else if (index === 1) {
          misterStats[mister].argento++;
        } else if (index === 2) {
          misterStats[mister].bronzo++;
        } else if (index === 3) {
          misterStats[mister].quarto++;
        }
      });
    });

    // Converte in array e ordina per oro, argento, bronzo, quarto posto
    return Object.entries(misterStats)
      .map(([mister, stats]) => ({ mister, ...stats }))
      .sort((a, b) => {
        if (b.oro !== a.oro) return b.oro - a.oro;
        if (b.argento !== a.argento) return b.argento - a.argento;
        if (b.bronzo !== a.bronzo) return b.bronzo - a.bronzo;
        return b.quarto - a.quarto;
      });
  }

  $: medagliere = calculateMedagliere(seasons);
</script>

<div class="mb-4">
  <h2 class="text-center mb-4">🏆 Medagliere La Genuina 🏆</h2>

  <div class="row">
    <div class="col-12">
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Mister</th>
              <th scope="col" class="text-center">🥇 Oro</th>
              <th scope="col" class="text-center">🥈 Argento</th>
              <th scope="col" class="text-center">🥉 Bronzo</th>
              <th scope="col" class="text-center">4°</th>
            </tr>
          </thead>
          <tbody>
            {#each medagliere as entry, index}
              <tr class={index < 3 ? 'table-warning' : ''}>
                <th scope="row">
                  {#if index === 0}
                    🥇
                  {:else if index === 1}
                    🥈
                  {:else if index === 2}
                    🥉
                  {:else}
                    {index + 1}
                  {/if}
                </th>
                <td><strong>{entry.mister}</strong></td>
                <td class="text-center">
                  <span class="badge bg-warning text-dark">{entry.oro}</span>
                </td>
                <td class="text-center">
                  <span class="badge bg-secondary">{entry.argento}</span>
                </td>
                <td class="text-center">
                  <span class="badge badge-bronzo">{entry.bronzo}</span>
                </td>
                <td class="text-center">
                  <span class="badge bg-light text-dark">{entry.quarto}</span>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="row mt-4">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">📊 Statistiche Generali</h5>
          <div class="row">
            <div class="col-md-4">
              <div class="text-center">
                <h6>Stagioni Totali</h6>
                <span class="badge bg-info fs-6">{seasons.length}</span>
              </div>
            </div>
            <div class="col-md-4">
              <div class="text-center">
                <h6>Mister nel Medagliere</h6>
                <span class="badge bg-info fs-6">{medagliere.length}</span>
              </div>
            </div>
            <div class="col-md-4">
              <div class="text-center">
                <h6>Re del Fantacalcio</h6>
                <span class="badge bg-warning text-dark fs-6">
                  {medagliere[0]?.mister} ({medagliere[0]?.oro} 🥇)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .table th, .table td {
    vertical-align: middle;
  }

  .badge {
    font-size: 0.9em;
  }

  .badge-bronzo {
    background-color: #cd7f32;
    color: white;
  }

  .table-warning {
    background-color: rgba(255, 193, 7, 0.1) !important;
  }
</style>
