<script>
  import { goto } from '$app/navigation';
  let translation;
  export let data;
  let orderStatuses = [
    { value: 0, label: 'Pending', color: 'bg-yellow-500' },
    { value: 1, label: 'Seen', color: 'bg-blue-500' },
    { value: 2, label: 'Delivering', color: 'bg-green-500' },
    { value: 3, label: 'Delivered', color: 'bg-purple-500' },
    { value: 5, label: 'Cancelled', color: 'bg-red-500' },
  ];
  let parsedData = data.data;
  const onButtonClick = (id) => {
    goto(`/admin/orders/edit/${id}`);
  };
</script>

<section class="w-full overflow-auto p-6">
  <table class="w-full table-auto border-separate border-spacing-0">
    <thead class="bg-gray-200 text-sm font-medium text-gray-700">
      <tr>
        <th class="px-4 py-3 text-left">Full Name</th>
        <th class="px-4 py-3 text-left">Phone</th>
        <th class="px-4 py-3 text-left">Country</th>
        <th class="px-4 py-3 text-left">City</th>
        <th class="px-4 py-3 text-left">Address</th>
        <th class="px-4 py-3 text-left">Postcode</th>
        <th class="px-4 py-3 text-left">Customer Status</th>
        <th class="px-4 py-3 text-left">Total Order Price</th>
        <th class="px-4 py-3 text-left">Status</th>
        <th class="px-4 py-3 text-left">Actions</th>
      </tr>
    </thead>
    <tbody class="text-sm font-normal">
      {#each parsedData as order, index}
        <tr class={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
          <td class="px-4 py-3">
            {order.personal_data.first_name}
            {order.personal_data.last_name}
          </td>
          <td class="px-4 py-3">{order.personal_data.phone}</td>
          <td class="px-4 py-3">{order.personal_data.delivery_data.country}</td>
          <td class="px-4 py-3">{order.personal_data.delivery_data.city}</td>
          <td class="px-4 py-3">{order.personal_data.delivery_data.address}</td>
          <td class="px-4 py-3">{order.personal_data.delivery_data.postcode}</td
          >
          <td class="px-4 py-3">{order.customer_status}</td>
          <td class="px-4 py-3">{order.price}</td>
          <td class="px-4 py-3">
            <span
              class={`px-3 py-1 text-white rounded ${
                orderStatuses.find((status) => status.value === order.status)
                  ?.color
              }`}
            >
              {orderStatuses.find((status) => status.value === order.status)
                ?.label}
            </span>
          </td>
          <td class="px-4 py-3">
            <button
              type="button"
              on:click={() => onButtonClick(order._id)}
              class="px-6 py-1 bg-[var(--color-primary-300)] text-white rounded hover:bg-opacity-90 transition-colors"
            >
              Edit
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>
