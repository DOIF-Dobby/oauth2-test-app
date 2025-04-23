import { defineMutation } from "@/libs/query/define-mutation";
import { testService } from "@/services/test/test-service";

export const testMutations = defineMutation({
  test2: () => ({
    mutationFn: testService.test2,
  }),
});
